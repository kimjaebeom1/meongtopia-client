import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  largeDogState,
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
  const [descImage, setDescImage] = useState("");
  const [petArr, setPetArr] = useState([]);
  const [pet, setPet] = useState({
    petImgUrl: "",
    name: "",
    age: 0,
    breed: "",
    description: "",
  });

  const onClickAddDog = (data) => {
    setPet((prev) => {
      [
        ...petArr,
        {
          petImgUrl: data,
          name: data.pet.name,
          age: data.pet.age,
          breed: data.pet.breed,
          description: data.pet.description,
        },
      ];
    });
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

  const onChangeDescImage = (fileUrl: string) => {
    setDescImage(fileUrl);
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
      descImage={descImage}
      onChangeDescImage={onChangeDescImage}
    />
  );
}
