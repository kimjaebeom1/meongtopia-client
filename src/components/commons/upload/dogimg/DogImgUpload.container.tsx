import { useMutation } from "@apollo/client";
import { useRef } from "react";
import DogImgUploadUI from "./DogImgUpload.presenter";
import { UPLOAD_FILE } from "./DogImgUpload.queries";
import { DogImgcheckValidationImage } from "./DogImgUpload.validation";

export default function DogImgUpload(props) {
  const fileRef = useRef(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = DogImgcheckValidationImage(event.target.files?.[0]);
    if (!file) return;

    const result = await uploadFile({ variables: [{ file }] });
    props.onChangeDescImage(String(result.data.uploadRecipeImages));
  };

  return (
    <DogImgUploadUI
      fileRef={fileRef}
      descImage={props.descImage}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
