import "antd/dist/antd.css";
import * as HomePage from "./HomePage.styles";
import FadeIn from "react-fade-in";
import ChatBot from "../../commons/chatbot";

export default function HomeUI(props) {
  return (
    <HomePage.Container>
      <div
        style={{
          width: "1920px",
          height: "350px",
          backgroundColor: "orange",
        }}
      >
        ㅇ
      </div>
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
      <ChatBot />
    </HomePage.Container>
  );
}
