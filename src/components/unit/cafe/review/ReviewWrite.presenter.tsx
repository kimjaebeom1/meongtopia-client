import { getDate } from "../../../../commons/libraries/utils";
import * as ReviewWrite from "./ReviewWrite.styles";

export default function ReviewWriteUI(props) {
  return (
    <>
      <ReviewWrite.Body>
        <ReviewWrite.Review>
          <ReviewWrite.CommentsTag>리뷰</ReviewWrite.CommentsTag>{" "}
          <ReviewWrite.ListContainer>
            {props.data?.fetchStoreReviewes.map((el) => (
              <>
                <ReviewWrite.ProfileContainer>
                  <ReviewWrite.ProfileWrapper>
                    <ReviewWrite.ProfileImg
                      src={`https://storage.googleapis.com/${el.user.profileImgUrl}`}
                    />
                    <ReviewWrite.Profile>
                      <ReviewWrite.Name>{el.user.nickname}</ReviewWrite.Name>
                      <ReviewWrite.Date>
                        {getDate(el.createdAt)}
                      </ReviewWrite.Date>
                    </ReviewWrite.Profile>
                  </ReviewWrite.ProfileWrapper>
                </ReviewWrite.ProfileContainer>
                <ReviewWrite.Star value={el.rating} />
                <ReviewWrite.Contents>{el.contents}</ReviewWrite.Contents>
              </>
            ))}

            <ReviewWrite.More>더보기 {">"}</ReviewWrite.More>
          </ReviewWrite.ListContainer>
        </ReviewWrite.Review>
        <ReviewWrite.WriteWrapper>
          <ReviewWrite.CommentsTag>리뷰 남기기</ReviewWrite.CommentsTag>
          <ReviewWrite.Star defaultValue={5} onChange={props.setRating} />
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
