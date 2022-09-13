import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  bigDogState,
  petArrState,
  smallDogState,
} from "../../../../../commons/store";
import DogContentsWriteUI from "./DogContentsWrite.presenter";

export default function DogContentsWrite() {
  const { register } = useForm({
    mode: "onChange",
  });
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState(0);
  const [dogBreed, setDogBreed] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [petArr, setPetArr] = useRecoilState(petArrState);
  const [bigDog, setBigDog] = useRecoilState(bigDogState);
  const [smallDog, setSmallDog] = useRecoilState(smallDogState);

  const onChangeBigDog = (event) => {
    setBigDog(event.target.value);
  };

  const onChangeSmallDog = (event) => {
    setSmallDog(event.target.value);
  };

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

    console.log(petArr);
    setDogImage("");
  };

  const onChangeDogImage = (fileUrl: string) => {
    setDogImage(fileUrl);
  };
  console.log(petArr);

  const onClickDelete = (index: any) => () => {
    setPetArr(petArr.filter((el) => el !== index));
  };

  return (
    <DogContentsWriteUI
      onClickAddDog={onClickAddDog}
      register={register}
      dogImage={dogImage}
      onChangeDogImage={onChangeDogImage}
      onChangeDogName={onChangeDogName}
      onChangeDogAge={onChangeDogAge}
      onChangeDogBreed={onChangeDogBreed}
      onChangeDogDescription={onChangeDogDescription}
      onChangeBigDog={onChangeBigDog}
      onChangeSmallDog={onChangeSmallDog}
      petArr={petArr}
      onClickDelete={onClickDelete}
    />
  );
}
