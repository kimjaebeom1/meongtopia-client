import * as DogImgUpload from "./DogImgUpload.styles";

export default function DogImgUploadUI(props) {
  return (
    <>
      {props.dogImage ? (
        <DogImgUpload.DogUploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.dogImage}`}
        />
      ) : (
        <DogImgUpload.DogImage onClick={props.onClickUpload}>
          <img src="/images/uploadfile.svg" />
          <span>강아지 사진을 넣어주세요</span>
        </DogImgUpload.DogImage>
      )}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
