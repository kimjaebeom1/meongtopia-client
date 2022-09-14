import { useState, createRef, useEffect, MouseEvent } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
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
  const [locationActive, setLocationActive] = useState("");
  const [conditionActive, setConditionActive] = useState([""]);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [isOpen, setIsOpen] = useState(false);
  const [petArr] = useRecoilState(petArrState);
  const [bigDog] = useRecoilState(bigDogState);
  const [smallDog] = useRecoilState(smallDogState);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const { register, handleSubmit, setValue, trigger, getValues, formState } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

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

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const editorRef = createRef<Editor>();

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("description", inputs);
    trigger("description");
    setDescription(inputs);
  };

  const onClickCreateStore = async (data) => {
    if (!petArr.join()) return alert("강아지 정보를 추가해주세요!");
    if (!bigDog || !smallDog) return alert("강아지 수를 입력해주세요!");

    try {
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
            locationTag: locationActive,
            storeTag: conditionActive,
            pet: [...petArr],
          },
        },
      });
      alert("게시글 생성이 완료되었습니다.");
      router.push(`/cafe/${result.data.createStore.storeID}`);
    } catch (error) {
      if (error instanceof Error) alert("등록 실패");
    }
  };

  const onClickLocationTag = (e: MouseEvent<HTMLDivElement>) => {
    setLocationActive((e.target as HTMLDivElement).id);
  };

  const onClickConditionTag = (e: MouseEvent<HTMLDivElement>) => {
    if (conditionActive.includes((e.target as HTMLDivElement).id)) {
      setConditionActive(
        conditionActive.filter((el) => el !== (e.target as HTMLDivElement).id)
      );
    } else
      setConditionActive((prev) => [...prev, (e.target as HTMLDivElement).id]);
  };

  const onClickPrev = () => {
    setNext(false);
  };

  const onClickNext = () => {
    if (
      formState.isValid === false ||
      !description ||
      description === "<p><br></p>" ||
      !fileUrls.join("") ||
      !locationActive ||
      !conditionActive.join()
    ) {
      alert("값을 입력해주세요");
      return;
    }
    setNext(true);
  };

  return (
    <CafeContentsWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      register={register}
      handleSubmit={handleSubmit}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickCreateStore={onClickCreateStore}
      onChangeDescription={onChangeDescription}
      next={next}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressModal={onClickAddressModal}
      handleOk={handleOk}
      closeModal={closeModal}
      address={getValues("address")}
      editorRef={editorRef}
      formState={formState}
      description={description}
      locationActive={locationActive}
      conditionActive={conditionActive}
      onClickLocationTag={onClickLocationTag}
      onClickConditionTag={onClickConditionTag}
      petArr={petArr}
      bigDog={bigDog}
      smallDog={smallDog}
    />
  );
}
