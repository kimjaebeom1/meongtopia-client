import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  bigDogState,
  petArrState,
  smallDogState,
} from "../../../../../commons/store";
import DogContentsWriteUI from "./DogContentsWrite.presenter";

export default function DogContentsWrite(props) {
  const { register } = useForm({
    mode: "onChange",
  });
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState(0);
  const [dogBreed, setDogBreed] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [petArr, setPetArr] = useRecoilState<
    {
      petImgUrl: string;
      name: string;
      age: number;
      breed: string;
      description: string;
    }[]
  >(petArrState);
  const [bigDog, setBigDog] = useRecoilState(bigDogState);
  const [smallDog, setSmallDog] = useRecoilState(smallDogState);

  useEffect(() => {
    if (props.data?.fetchStore.pet?.length) {
      setPetArr([...props.data?.fetchStore.pet]);
    }
  }, [props.data]);

  const onChangeBigDog = (event: ChangeEvent<HTMLInputElement>) => {
    setBigDog(event.target.value);
  };

  const onChangeSmallDog = (event: ChangeEvent<HTMLInputElement>) => {
    setSmallDog(event.target.value);
  };

  const onChangeDogName = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDogName(event.target.value);
  };

  const onChangeDogAge = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDogAge(event.target.value);
  };

  const onChangeDogBreed = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDogBreed(event.target.value);
  };

  const onChangeDogDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
    ((document.getElementById("name") as HTMLTextAreaElement).value = ""),
      ((document.getElementById("breed") as HTMLTextAreaElement).value = ""),
      ((document.getElementById("age") as HTMLTextAreaElement).value = ""),
      ((document.getElementById("desc") as HTMLTextAreaElement).value = "");
    setDogImage("");
    setDogAge(0);
    setDogBreed("");
    setDogName("");
    setDogDescription("");
  };
  console.log(petArr);

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
      data={props.data}
    />
  );
}
