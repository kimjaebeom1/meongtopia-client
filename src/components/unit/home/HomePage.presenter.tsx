import "antd/dist/antd.css";
import * as HomePage from "./HomePage.styles";

export default function HomeUI(props) {
  return (
    <HomePage.Container>
      <HomePage.Wrapper>
        <div>추천 애견카페</div>
        <HomePage.PickListWrapper>
          {props.data?.fetchPickRank.map((el) => (
            <HomePage.PickList>
              <HomePage.PickImage
                src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
              />
              <div>{el.name}</div>
              <div>{el.description}</div>
            </HomePage.PickList>
          ))}
        </HomePage.PickListWrapper>
      </HomePage.Wrapper>
    </HomePage.Container>
  );
}
