import * as Write from "./CommunityWrite.styles";

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

        <Write.TitleWrap>
          <Write.SubTitle>제목</Write.SubTitle>
          <Write.TitleInput
            placeholder="게시물 제목을 입력해주세요"
            type="text"
            {...props.register("title")}
            defaultValue={props.data?.fetchBoard.title || ""}
          />
        </Write.TitleWrap>
        <Write.Line />

        <Write.ContentsWrap>
          <Write.ImgWrap>
            <Write.SubTitle>이미지</Write.SubTitle>

            {props.file ? (
              <Write.ImgBtn
                onClick={props.onClickUpload}
                src={props.imageUrl}
              />
            ) : (
              <Write.UnImgWrap>
                <Write.ImgBtn onClick={props.onClickUpload} />
                <Write.Error>사진 추가</Write.Error>
              </Write.UnImgWrap>
            )}
          </Write.ImgWrap>

          <Write.ImgWrap>
            <Write.SubTitle>내용</Write.SubTitle>
            <Write.Contents
              onChange={props.handleChange}
              defaultValue={props.data?.fetchBoard.contents || ""}
            />
          </Write.ImgWrap>
        </Write.ContentsWrap>
        <Write.Button>{props.isEdit ? "수정하기" : "등록하기"}</Write.Button>
      </Write.Wrapper>

      <Write.Img type="file" ref={props.fileRef} onChange={props.onChangeImg} />
    </form>
  );
}
