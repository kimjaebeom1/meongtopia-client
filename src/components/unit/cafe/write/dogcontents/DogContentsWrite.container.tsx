import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  largeDogState,
  petArrState,
  withDogState,
  yardState,
} from "../../../../../commons/store";
import DogContentsWriteUI from "./DogContentsWrite.presenter";

export default function DogContentsWrite() {
  const [largeDog, setLargeDog] = useRecoilState(largeDogState);
  const [withDog, setWithDog] = useRecoilState(withDogState);
  const [yard, setYard] = useRecoilState(yardState);
  const { register } = useForm({
    mode: "onChange",
  });
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState(0);
  const [dogBreed, setDogBreed] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [petArr, setPetArr] = useRecoilState(petArrState);

  const onChangeDogName = (event) => {
    setDogName(event.target.value);
  };

  const onChangeDogAge = (event) => {
    setDogAge(event.target.value);
  };

  const onChangeDogBreed = (event) => {
    setDogBreed(event.target.value);
  };

  const onChangeDogDescription = (event) => {
    setDogDescription(event.target.value);
  };

  const onClickAddDog = () => {
    if (!petArr) return;
    setPetArr((prev) => [
      ...petArr,
      {
        petImgUrl: dogImage,
        name: dogName,
        age: Number(dogAge),
        breed: dogBreed,
        description: dogDescription,
      },
    ]);
    setDogImage("");
  };

  const onClickWithDog = (event) => {
    if (withDog === "") {
      setWithDog(event.target.value);
    } else {
      setWithDog("");
    }
    console.log(withDog);
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
    console.log(largeDog);
  };

  const onChangeDogImage = (fileUrl: string) => {
    setDogImage(fileUrl);
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
      dogImage={dogImage}
      onChangeDogImage={onChangeDogImage}
      onChangeDogName={onChangeDogName}
      onChangeDogAge={onChangeDogAge}
      onChangeDogBreed={onChangeDogBreed}
      onChangeDogDescription={onChangeDogDescription}
    />
  );
}
