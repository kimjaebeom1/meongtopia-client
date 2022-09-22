import * as UserReview from "./UserReview.styles";
import { v4 as uuidv4 } from "uuid";
import { IMyPageUserReviewUIProps } from "./UserReview.types";
import Dompurify from "dompurify";

export default function MyPageUserReviewUI(props: IMyPageUserReviewUIProps) {
  return (
    <UserReview.Wrapper>
      <UserReview.PageTitle>내가 쓴 추천글 목록</UserReview.PageTitle>
      {props.data?.fetchUserBoards
        .filter((_, i) => i < Number(props.add) * 2)
        .map((el) => (
          <UserReview.ListWrapper key={uuidv4()}>
            {el.boardImg[0].url ? (
              <UserReview.Img
                src={`https://storage.googleapis.com/${el.boardImg[0].url}`}
              />
            ) : (
              <UserReview.Img src="/images/dogcharacter.jpg" />
            )}
            <UserReview.UserList>
              <UserReview.ContentsText>
                <UserReview.Title>{el.title}</UserReview.Title>
              </UserReview.ContentsText>
              <UserReview.Horizon />
              <UserReview.ContentsText>
                {typeof window !== "undefined" ? (
                  <UserReview.Contents
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(el.contents || ""),
                    }}
                  ></UserReview.Contents>
                ) : (
                  <div></div>
                )}
              </UserReview.ContentsText>
            </UserReview.UserList>
            <UserReview.Detail id={el.boardID} onClick={props.onClickToDetail}>
              바로가기
            </UserReview.Detail>
          </UserReview.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.data?.fetchUserBoards ? (
          Number(props.add) * 2 < props.data?.fetchUserBoards.length && (
            <UserReview.AddBtn onClick={props.onClickAdd}>
              더보기
            </UserReview.AddBtn>
          )
        ) : (
          <h2>추천글 목록이 없습니다.</h2>
        )}
      </div>
    </UserReview.Wrapper>
  );
}
