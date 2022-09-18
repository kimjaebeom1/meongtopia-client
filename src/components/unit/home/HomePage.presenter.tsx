import "antd/dist/antd.css";
import * as HomePage from "./HomePage.styles";
import FadeIn from "react-fade-in";

export default function HomeUI(props) {
  return (
    <HomePage.Container>
      <HomePage.Banner>
        <HomePage.BannerText>
          <div>멍토피아와 쉽게</div>
          <HomePage.BannerTextRow>
            애견카페
            <div>예약하기</div>
          </HomePage.BannerTextRow>
          <HomePage.BannerInfoText>
            {`최근 펫팸족(pet+family)은 600만 가구를 넘는 등 반려동물 시장은 매년 커지고 있습니다. 이제 멍토피아와 함께하며 애견카페의 정보를 편리하게 얻어보세요!`}
          </HomePage.BannerInfoText>
          <HomePage.BannerBtn>더 알아보기</HomePage.BannerBtn>
        </HomePage.BannerText>
      </HomePage.Banner>
      <HomePage.Wrapper>
        <FadeIn>
          <HomePage.PickTag>
            <div>추천</div> <img src="/images/logoHead.svg" />
            카페
          </HomePage.PickTag>
          <HomePage.PickListWrapper>
            {props.data?.fetchPickRank.map((el) => (
              <HomePage.PickList
                onClick={props.onClickMoveToPick(el)}
                key={el.storeID}
              >
                {el.storeImg[0].url ? (
                  <HomePage.PickImage
                    src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                  />
                ) : (
                  <HomePage.PickImage src="/images/instacafe.jpeg" />
                )}

                <HomePage.PickName>{el.name}</HomePage.PickName>
                <HomePage.PickDescription>
                  {el.locationTag.name}
                </HomePage.PickDescription>
              </HomePage.PickList>
            ))}
          </HomePage.PickListWrapper>
        </FadeIn>
        <FadeIn>
          <HomePage.PickTag>
            <div>실시간 인기</div> <img src="/images/logoHead.svg" />
            카페{" "}
          </HomePage.PickTag>
          <HomePage.PickListWrapper>
            {props.recentData?.fetchStores.slice(0, 3).map((el) => (
              <HomePage.PickList key={el.storeID}>
                {el.storeImg[0].url ? (
                  <HomePage.PickImage
                    src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                  />
                ) : (
                  <HomePage.PickImage src="/images/instacafe.jpeg" />
                )}

                <HomePage.PickName>{el.name}</HomePage.PickName>
                <HomePage.PickDescription>
                  {el.locationTag.name}
                </HomePage.PickDescription>
              </HomePage.PickList>
            ))}
          </HomePage.PickListWrapper>
        </FadeIn>
      </HomePage.Wrapper>
    </HomePage.Container>
  );
}
