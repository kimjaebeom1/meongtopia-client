import { useState, createRef, useEffect } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE } from "./CafeContentsWrite.queries";
import Editor from "@toast-ui/editor";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  bigDogState,
  petArrState,
  smallDogState,
} from "../../../../../commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { schema } from "../../../../../commons/libraries/validation";

export default function CafeContentsWrite() {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [largeDog, setLargeDog] = useState("");
  const [withDog, setWithDog] = useState("");
  const [yard, setYard] = useState("");
  const [withChild, setWithChild] = useState("");
  const [petArr] = useRecoilState(petArrState);
  const [bigDog] = useRecoilState(bigDogState);
  const [smallDog] = useRecoilState(smallDogState);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  // 주소 관련
  const onCompleteAddressSearch = (data: any) => {
    setValue("address", data.address);
    trigger("address");
    setIsOpen(false);
    setAddress(data.address);
  };
  console.log(address);

  const onClickAddressModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const storeArr = [withDog, yard, largeDog, withChild];

  const { register, handleSubmit, setValue, trigger, getValues, formState } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickPrev = () => {
    setNext(false);
  };
  console.log(formState);

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const editorRef = createRef<Editor>();

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("description", inputs);
    trigger("description");
    setDescription(inputs);
  };

  const onClickCreateStore = async (data) => {
    const result = await createStore({
      variables: {
        createStoreInput: {
          name: data.name,
          phone: data.phone,
          storeImg: fileUrls.join().split(","),
          open: data.open,
          close: data.close,
          bigDog: Number(bigDog),
          smallDog: Number(smallDog),
          entranceFee: Number(data.entranceFee),
          description: data.description,
          address: data.address,
          addressDetail: data.addressDetail,
          locationTag: location,
          storeTag: [withDog, yard, largeDog, withChild],
          pet: [...petArr],
        },
      },
    });
    alert("게시글 생성이 완료되었습니다.");
    router.push(`/cafe/${result.data.createStore.storeID}`);
  };

  const onClickWithDog = (event) => {
    if (withDog === "") {
      setWithDog(event.target.value);
    } else {
      setWithDog("");
    }
  };

  const onClickYard = (event) => {
    if (yard) {
      setYard("");
    } else {
      setYard(event.target.value);
    }
  };

  const onClickLargeDog = (event) => {
    if (largeDog) {
      setLargeDog("");
    } else {
      setLargeDog(event.target.value);
    }
  };

  const onClickWithChild = (event) => {
    if (withChild) {
      setWithChild("");
    } else {
      setWithChild(event.target.value);
    }
  };

  const onClickNext = () => {
    if (
      formState.isValid === false ||
      !location ||
      !storeArr.join("") ||
      !description ||
      description === "<p><br></p>"
    ) {
      alert("값을 입력해주세요");
      return;
    }
    setNext(true);
  };

  console.log(fileUrls);

  return (
    <CafeContentsWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeLocation={onChangeLocation}
      register={register}
      handleSubmit={handleSubmit}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickCreateStore={onClickCreateStore}
      onChangeDescription={onChangeDescription}
      location={location}
      storeArr={storeArr}
      next={next}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressModal={onClickAddressModal}
      handleOk={handleOk}
      closeModal={closeModal}
      address={getValues("address")}
      editorRef={editorRef}
      onClickWithDog={onClickWithDog}
      onClickYard={onClickYard}
      onClickLargeDog={onClickLargeDog}
      onClickWithChild={onClickWithChild}
      withDog={withDog}
      yard={yard}
      largeDog={largeDog}
      withChild={withChild}
      formState={formState}
      description={description}
      storeArr={storeArr}
    />
  );
}
