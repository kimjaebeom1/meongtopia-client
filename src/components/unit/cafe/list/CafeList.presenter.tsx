import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";

export default function CafeListUI() {
  return (
    <CafeList.Container>
      <CafeList.ListSelectWrapper>
        <CafeList.LocationSelect>
          <div>
            <h3>위치별</h3>
          </div>{" "}
          <CafeList.CafeLocationWrapper>
            <CafeList.LocationTag>홍대</CafeList.LocationTag>
            <CafeList.LocationTag>강남</CafeList.LocationTag>
            <CafeList.LocationTag>대학로</CafeList.LocationTag>
            <CafeList.LocationTag>건대</CafeList.LocationTag>
            <CafeList.LocationTag>잠실</CafeList.LocationTag>
          </CafeList.CafeLocationWrapper>
        </CafeList.LocationSelect>
        <CafeList.ConditionSelect>
          <div>
            <h3>조건별</h3>
          </div>
          <CafeList.CafeCondtionWrapper>
            <CafeList.ConditionTag>동반 가능 유무</CafeList.ConditionTag>
            <CafeList.ConditionTag>야외 마당 유무</CafeList.ConditionTag>
            <CafeList.ConditionTag>대형견 유무</CafeList.ConditionTag>
          </CafeList.CafeCondtionWrapper>
        </CafeList.ConditionSelect>
        <CafeList.SearchList>
          <h3>검색</h3> <CafeList.SearchBar />
        </CafeList.SearchList>
      </CafeList.ListSelectWrapper>
      <CafeList.CafeListWrapper>
        <CafeList.SliderWrapper>
          <ListSlider />
        </CafeList.SliderWrapper>
        <CafeList.CafeList>
          <CafeList.NameTag>멍돌핀 애견카페</CafeList.NameTag>
          <CafeList.AddressTag>서울 강남구 논현동</CafeList.AddressTag>

          <CafeList.SelectTag># 동반 가능 # 대형견</CafeList.SelectTag>
          <CafeList.RatingTag>평점 4.67</CafeList.RatingTag>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
      <CafeList.CafeListWrapper>
        <CafeList.SliderWrapper>
          <ListSlider />
        </CafeList.SliderWrapper>
        <CafeList.CafeList>
          <CafeList.NameTag>겨울이 머무는집</CafeList.NameTag>
          <CafeList.AddressTag>서울 마포구 와우산로</CafeList.AddressTag>

          <CafeList.SelectTag># 야외 마당 # 대형견</CafeList.SelectTag>
          <CafeList.RatingTag>평점 4.8</CafeList.RatingTag>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
      <CafeList.CafeListWrapper>
        <CafeList.SliderWrapper>
          <ListSlider />
        </CafeList.SliderWrapper>
        <CafeList.CafeList>
          <CafeList.NameTag>전설의 강아지</CafeList.NameTag>
          <CafeList.AddressTag>서울 대학로</CafeList.AddressTag>

          <CafeList.SelectTag># 동반 가능</CafeList.SelectTag>
          <CafeList.RatingTag>평점 4.3</CafeList.RatingTag>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
    </CafeList.Container>
  );
}
