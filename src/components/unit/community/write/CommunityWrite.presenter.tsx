import * as Write from "./CommunityWrite.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommunityPresenterPage(props: any) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <Write.Wrapper>
        <Write.Title>
          {props.isEdit ? "게시물 수정하기" : "게시물 등록하기"}
        </Write.Title>
        <Write.ContentsWrap>
          <Write.ColumnWrap>
            <Write.SubTitle>이미지</Write.SubTitle>
            <div onClick={props.onClickUpload}>이미지선택</div>
            <Write.PrevImg src={props.imageUrl} />
            {/* // imageUrl */}
            <Write.Img
              type="file"
              ref={props.fileRef}
              onChange={props.onChangeImg}
            />
          </Write.ColumnWrap>

          <Write.ColumnWrap>
            <Write.SubTitle>제목</Write.SubTitle>
            <Write.TitleInput
              placeholder="게시물 제목을 입력해주세요"
              type="text"
              {...props.register("title")}
              defaultValue={props.data?.fetchBoard.title || ""}
            />
          </Write.ColumnWrap>

          <Write.ColumnWrap>
            <Write.SubTitle>내용</Write.SubTitle>
            <ReactQuill
              onChange={props.handleChange}
              defaultValue={props.data?.fetchBoard.contents || ""}
            />
          </Write.ColumnWrap>
          <Write.Button>{props.isEdit ? "수정하기" : "등록하기"}</Write.Button>
        </Write.ContentsWrap>
      </Write.Wrapper>
    </form>
  );
}
