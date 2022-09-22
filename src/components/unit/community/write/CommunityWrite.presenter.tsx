import * as Write from "./CommunityWrite.styles";
import { PlusCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useEffect } from "react";

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

        <Write.SubWrap>
          <Write.ContentsWrap>
            <Write.ImgWrap>
              <Write.SubTitle>이미지</Write.SubTitle>
              {props.isEdit ? (
                props.data ? (
                  <Write.ImgBtn
                    src={
                      props.file
                        ? props.imageUrl
                        : `https://storage.googleapis.com/${props.data?.fetchBoard.boardImg?.[0]?.url}`
                    }
                    onClick={props.onClickUpload}
                  />
                ) : (
                  <Write.UnImgWrap>
                    <Write.ImgDiv onClick={props.onClickUpload}>
                      <PlusCircleOutlined style={{ fontSize: "2rem" }} />
                    </Write.ImgDiv>
                  </Write.UnImgWrap>
                )
              ) : props.file ? (
                <Write.ImgBtn
                  onClick={props.onClickUpload}
                  src={props.imageUrl}
                />
              ) : (
                <Write.UnImgWrap>
                  <Write.ImgDiv onClick={props.onClickUpload}>
                    <PlusCircleOutlined style={{ fontSize: "2rem" }} />
                  </Write.ImgDiv>
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
        </Write.SubWrap>
        <Write.Img
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeImg}
        />
      </Write.Wrapper>
    </form>
  );
}
