import { useState } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_STORE } from "./CafeContentsWrite.queries";

export default function CafeContentsWrite() {
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [withDog, setWithDog] = useState("");
  const [yard, setYard] = useState("");
  const [largeDog, setLargeDog] = useState("");
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

  const onClickWithDog = (event) => {
    if (withDog) {
      setWithDog("");
    } else {
      setWithDog(event.target.value);
    }
    console.log(withDog);
  };

  const onClickYard = (event) => {
    if (yard) {
      setYard("");
    } else {
      setYard(event.target.value);
    }
    console.log(yard);
  };

  const onClickLargeDog = (event) => {
    if (largeDog) {
      setLargeDog("");
    } else {
      setLargeDog(event.target.value);
    }
    console.log(largeDog);
  };

  const onClickCreateStore = async (data) => {
    const result = await createStore({
      variables: {
        name: data.name,
      },
    });
  };

  return (
    <CafeContentsWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      register={register}
      handleSubmit={handleSubmit}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickWithDog={onClickWithDog}
      onClickYard={onClickYard}
      onClickLargeDog={onClickLargeDog}
      onClickCreateStore={onClickCreateStore}
      withDog={withDog}
      yard={yard}
      largeDog={largeDog}
      next={next}
    />
  );
}
