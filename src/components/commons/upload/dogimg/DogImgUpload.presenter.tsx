import * as DogImgUpload from "./DogImgUpload.styles";

export default function DogImgUploadUI(props) {
  return (
    <>
      <DogImgUpload.RepImage2 onClick={props.onClickUpload}>
        <img src="/images/uploadfile.svg" />
        <span>강아지 사진을 넣어주세요</span>
      </DogImgUpload.RepImage2>

      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
