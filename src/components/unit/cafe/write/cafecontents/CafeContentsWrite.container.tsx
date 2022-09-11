import { useState, createRef, useEffect } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE } from "./CafeContentsWrite.queries";
import { Description } from "@material-ui/icons";
import Editor from "@toast-ui/editor";
import {
  bigDogState,
  petArrState,
  smallDogState,
} from "../../../../../commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

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
  const [petArr] = useRecoilState(petArrState);
  const [bigDog] = useRecoilState(bigDogState);
  const [smallDog] = useRecoilState(smallDogState);

  // 주소 관련
  const onCompleteAddressSearch = (data: any) => {
    setValue("address", data.address);
    trigger("address");

    setIsOpen(false);
  };

  const onClickAddressModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
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

  const onClickNext = () => {
    setNext(true);
  };

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const editorRef = createRef<Editor>();

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("description", inputs);
    trigger("description");
  };

  const onClickCreateStore = async (data) => {
    const result = await createStore({
      variables: {
        createStoreInput: {
          name: data.name,
          phone: data.phone,
          storeImage: fileUrls.join(),
          open: data.open,
          close: data.close,
          bigDog: bigDog,
          smallDog: smallDog,
          entranceFee: Number(data.entranceFee),
          description: data.description,
          address: data.address,
          addressDetail: data.addressDetail,
          locationTag: location,
          storeTag: [withDog, yard, largeDog],
          pet: [...petArr],
        },
      },
    });
    alert("게시글 생성이 완료되었습니다.");
    console.log(result);
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
      withDog={withDog}
      yard={yard}
      largeDog={largeDog}
    />
  );
}
