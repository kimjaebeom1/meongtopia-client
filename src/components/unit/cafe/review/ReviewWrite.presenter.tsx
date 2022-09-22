import { getDate } from "../../../../commons/libraries/utils";
import * as ReviewWrite from "./ReviewWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function ReviewWriteUI(props: any) {
  return (
    <>
      <ReviewWrite.Body>
        {/* 리뷰 리스트 */}
        <ReviewWrite.Review>
          <ReviewWrite.CommentsTag>리뷰</ReviewWrite.CommentsTag>{" "}
          <ReviewWrite.ListContainer>
            {props.data?.fetchStoreReviewes
              .filter((_: any, i: number) => i < Number(props.add) * 3)
              .map((el: any) => (
                <div key={uuidv4()}>
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
                  <ReviewWrite.IconWrapper>
                    {props.isEdit ? (
                      <ReviewWrite.Star
                        onChange={props.setRating}
                        defaultValue={el.rating}
                      />
                    ) : (
                      <ReviewWrite.Star disabled value={el.rating} />
                    )}

                    <div>
                      <ReviewWrite.EditIcon onClick={props.onClickEditIcon} />
                      <ReviewWrite.DeleteIcon
                        onClick={props.onClickDeleteReview}
                      />
                    </div>
                  </ReviewWrite.IconWrapper>
                  {props.isEdit ? (
                    <ReviewWrite.Contents>
                      <ReviewWrite.ReviewBox
                        onChange={props.onChangeReview}
                        defaultValue={props.contents}
                      ></ReviewWrite.ReviewBox>
                      <ReviewWrite.ReviewEditBtn
                        onClick={props.onClickUpdateReview}
                      >
                        수정하기
                      </ReviewWrite.ReviewEditBtn>
                    </ReviewWrite.Contents>
                  ) : (
                    <ReviewWrite.Contents>{el.contents}</ReviewWrite.Contents>
                  )}
                </div>
              ))}
          </ReviewWrite.ListContainer>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {props.data?.fetchStoreReviewes ? (
              Number(props.add) * 2 <
                props.data?.fetchStoreReviewes.map((el: any) => el[0])
                  .length && (
                <ReviewWrite.AddBtn onClick={props.onClickAdd}>
                  더보기
                </ReviewWrite.AddBtn>
              )
            ) : (
              <h2>리뷰 내역이 없습니다.</h2>
            )}
          </div>
        </ReviewWrite.Review>

        {/* 리뷰작성 */}
        <ReviewWrite.WriteWrapper>
          <ReviewWrite.CommentsTag>리뷰 남기기</ReviewWrite.CommentsTag>
          <ReviewWrite.Star defaultValue={0} onChange={props.setRating} />
          <ReviewWrite.CommentsBox
            placeholder="리뷰를 작성해주세요"
            defaultValue={props.contents}
            onChange={props.onChangeContents}
          ></ReviewWrite.CommentsBox>
          <ReviewWrite.ButtonWrapper>
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
