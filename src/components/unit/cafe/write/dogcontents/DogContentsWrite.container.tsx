import { useState } from "react";
import { useForm } from "react-hook-form";
import DogContentsWriteUI from "./DogContentsWrite.presenter";

export default function DogContentsWrite() {
  const [largeDog, setLargeDog] = useState("");
  const [withDog, setWithDog] = useState("");
  const [yard, setYard] = useState("");
  const { register } = useForm({
    mode: "onChange",
  });

  const [pet, setPet] = useState({
    petImgUrl: "",
    name: "",
    age: 0,
    breed: "",
    description: "",
  });

  const onClickAddDog = (data) => {};

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

  return (
    <DogContentsWriteUI
      onClickAddDog={onClickAddDog}
      onClickWithDog={onClickWithDog}
      onClickYard={onClickYard}
      onClickLargeDog={onClickLargeDog}
      withDog={withDog}
      yard={yard}
      largeDog={largeDog}
      register={register}
    />
  );
}
