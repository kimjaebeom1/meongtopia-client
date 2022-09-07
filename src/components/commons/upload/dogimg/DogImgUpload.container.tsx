import { useMutation } from "@apollo/client";
import { useRef } from "react";
import DogImgUploadUI from "./DogImgUpload.presenter";

export default function DogImgUpload(props) {
  const fileRef = useRef(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <DogImgUploadUI
      fileRef={fileRef}
      descImage={props.descImage}
      onClickUpload={onClickUpload}
    />
  );
}
