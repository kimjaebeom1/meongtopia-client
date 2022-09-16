import * as ReviewWrite from "./ReviewWrite.styles";

export default function ReviewWriteUI(props) {
  return (
    <>
      <ReviewWrite.Body>
        <ReviewWrite.BodyInfo>
          <ReviewWrite.ListContainer>
            <ReviewWrite.ProfileContainer>
              <ReviewWrite.ProfileIcon />
              <ReviewWrite.ProfileWrapper>
                <ReviewWrite.Name>홍길동님</ReviewWrite.Name>
                <ReviewWrite.Date>2022년 9월 1일</ReviewWrite.Date>
              </ReviewWrite.ProfileWrapper>
            </ReviewWrite.ProfileContainer>
            <ReviewWrite.Contents>
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하regerger
            </ReviewWrite.Contents>
            <ReviewWrite.More>더보기 {">"}</ReviewWrite.More>
          </ReviewWrite.ListContainer>
        </ReviewWrite.BodyInfo>
        <ReviewWrite.WriteWrapper>
          <ReviewWrite.CommentsTag>의견 남기기</ReviewWrite.CommentsTag>
          <ReviewWrite.Star onChange={props.setRating} />
          <ReviewWrite.CommentsBox
            placeholder="리뷰를 작성해주세요"
            // value={
            //   props.isEdit ? props.contents || props.el?.contents : props.contents
            // }
            onChange={props.onChangeContents}
          ></ReviewWrite.CommentsBox>

          <ReviewWrite.ButtonWrapper>
            {/* {props.isEdit && (
          <ReviewWrite.CancelBtn type="button" onClick={props.onClickCancel}>
            {" "}
            취소하기
          </ReviewWrite.CancelBtn>
        )} */}
            <ReviewWrite.CommentsBtn
              //   isEdit={props.isEdit}
              //   type="button"
              onClick={props.onClickWriteReview}
            >
              작성하기
              {/* {props.isEdit ? "수정하기" : "작성하기"} */}
            </ReviewWrite.CommentsBtn>
          </ReviewWrite.ButtonWrapper>
        </ReviewWrite.WriteWrapper>
      </ReviewWrite.Body>
    </>
  );
}
