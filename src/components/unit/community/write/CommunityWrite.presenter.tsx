import * as Write from "./CommunityWrite.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommunityPresenterPage(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Write.Wrapper>
        <Write.ColumnWrap>
          <Write.Title>제목</Write.Title>
          <Write.TitleInput
            placeholder="게시물 제목을 입력해주세요"
            type="text"
            {...props.register("title")}
          />
        </Write.ColumnWrap>

        <Write.ColumnWrap>
          <Write.Title>이미지</Write.Title>
          <div onClick={props.onClickUpload}>이미지선택</div>
          <Write.Img
            type="file"
            ref={props.fileRef}
            onChange={props.onChangeImg}
          />
        </Write.ColumnWrap>

        <Write.ColumnWrap>
          <Write.Title>내용</Write.Title>
          <ReactQuill onChange={props.handleChange} />
        </Write.ColumnWrap>
        <Write.Button>등록하기</Write.Button>
      </Write.Wrapper>
    </form>
  );
}
