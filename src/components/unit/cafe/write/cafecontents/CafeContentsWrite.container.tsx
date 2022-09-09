import { useState, createRef, useEffect } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE } from "./CafeContentsWrite.queries";
import { Description } from "@material-ui/icons";
import Editor from "@toast-ui/editor";
import {
  largeDogState,
  petArrState,
  withDogState,
  yardState,
} from "../../../../../commons/store";
import { useRecoilState } from "recoil";

export default function CafeContentsWrite() {
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [largeDog, setLargeDog] = useRecoilState(largeDogState);
  const [withDog, setWithDog] = useRecoilState(withDogState);
  const [yard, setYard] = useRecoilState(yardState);
  const editorRef = createRef<Editor>();
  const [petArr, setPetArr] = useRecoilState(petArrState);
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
    console.log("111");
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(newFileUrls);
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

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("description", inputs);
    trigger("description");
    console.log(Description);
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
    console.log(result);
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
    />
  );
}
