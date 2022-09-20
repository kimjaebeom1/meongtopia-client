import { useMutation } from "@apollo/client";
import { useRef } from "react";
import DogImgUploadUI from "./DogImgUpload.presenter";
import { UPLOAD_FILE } from "./DogImgUpload.queries";
import { DogImgcheckValidationImage } from "./DogImgUpload.validation";

export default function DogImgUpload(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: any) => {
    const file = DogImgcheckValidationImage(event.target.files?.[0]);
    if (!file) return;

    const result = await uploadFile({ variables: { files: file } });
    props.onChangeDogImage(String(result.data.uploadFile));
  };

  return (
    <DogImgUploadUI
      fileRef={fileRef}
      dogImage={props.dogImage}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
