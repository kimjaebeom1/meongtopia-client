import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";

export default function CafeListUI() {
  return (
    <CafeList.Container>
      <CafeList.ListSelectWrapper>
        <CafeList.LocationSelect>
          <h3>위치별</h3> <div>홍대</div>
          <div>강남</div>
          <div>대학로</div>
          <div>건대</div>
          <div>잠실</div>
        </CafeList.LocationSelect>
        <CafeList.ConditionSelect>
          <h3>조건별</h3> <div>동반 가능 유무</div>
          <div>야외 마당 유무</div>
          <div>대형견 유무</div>
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
