import * as CafeImgUpload from "./CafeImgUpload.styles";

export default function CafeImgUploadUI(props: any) {
  return (
    <CafeImgUpload.Wrapper>
      {props.fileUrl ? (
        <CafeImgUpload.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <CafeImgUpload.UploadBtn type="button" onClick={props.onClickUpload}>
          <img src="/images/uploadfile.svg" />
          <br />
          사진 추가
        </CafeImgUpload.UploadBtn>
      )}
      <CafeImgUpload.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </CafeImgUpload.Wrapper>
  );
}
