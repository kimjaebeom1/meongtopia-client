import * as UserReview from "./UserReview.styles";

export default function MyPageUserReviewUI() {
  return (
    <UserReview.Wrapper>
      <UserReview.SortWrapper>
        <UserReview.SortSelect name="정렬방식">
          <option>정렬방식</option>
        </UserReview.SortSelect>
      </UserReview.SortWrapper>
      <UserReview.ListContainer>
        <UserReview.ProfileContainer>
          <UserReview.ProfileIcon />
          <UserReview.ProfileWrapper>
            <UserReview.Name>홍길동님</UserReview.Name>
            <UserReview.Date>2022년 9월 1일</UserReview.Date>
          </UserReview.ProfileWrapper>
        </UserReview.ProfileContainer>
        <UserReview.Contents>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </UserReview.Contents>
        <UserReview.More>더보기 {">"}</UserReview.More>
      </UserReview.ListContainer>
      <UserReview.ListContainer>
        <UserReview.ProfileContainer>
          <UserReview.ProfileIcon />
          <UserReview.ProfileWrapper>
            <UserReview.Name>홍길동님</UserReview.Name>
            <UserReview.Date>2022년 9월 1일</UserReview.Date>
          </UserReview.ProfileWrapper>
        </UserReview.ProfileContainer>
        <UserReview.Contents>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </UserReview.Contents>
        <UserReview.More>더보기 {">"}</UserReview.More>
      </UserReview.ListContainer>
      <UserReview.ListContainer>
        <UserReview.ProfileContainer>
          <UserReview.ProfileIcon />
          <UserReview.ProfileWrapper>
            <UserReview.Name>홍길동님</UserReview.Name>
            <UserReview.Date>2022년 9월 1일</UserReview.Date>
          </UserReview.ProfileWrapper>
        </UserReview.ProfileContainer>
        <UserReview.Contents>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </UserReview.Contents>
        <UserReview.More>더보기 {">"}</UserReview.More>
      </UserReview.ListContainer>
    </UserReview.Wrapper>
  );
}
