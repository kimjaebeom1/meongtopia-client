import { useMutation } from "@apollo/client";
import { useRef } from "react";
import CafeImgUploadUI from "./CafeImgUpload.presenter";
import { UPLOAD_FILE } from "./CafeImgUpload.queries";
import { CafeImgcheckValidationImage } from "./CafeImgUpload.validation";

export default function CafeImgUpload(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: any) => {
    const file = CafeImgcheckValidationImage(event.target.files?.[0]);
    console.log(file);
    // if (!file) return;

    // try {
    const result = await uploadFile({
      variables: { files: file },
    });
    console.log(result);
    props.onChangeFileUrls(result.data?.uploadFile, props.index);
    // } catch (error) {
    //   // Modal.error({ content: error.message });
    // }
  };

  return (
    <CafeImgUploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
