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
          <div>주소</div>
          <div>제목</div>
          <div># 동반 가능 # 대형견 유무</div>
          <div>별점</div>
          <div>주소</div>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
      <CafeList.CafeListWrapper>
        <CafeList.SliderWrapper>
          <ListSlider />
        </CafeList.SliderWrapper>
        <CafeList.CafeList>
          <div>주소</div>
          <div>제목</div>
          <div># 동반 가능 # 대형견 유무</div>
          <div>별점</div>
          <div>주소</div>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
      <CafeList.CafeListWrapper>
        <CafeList.SliderWrapper>
          <ListSlider />
        </CafeList.SliderWrapper>
        <CafeList.CafeList>
          <div>주소</div>
          <div>제목</div>
          <div># 동반 가능 # 대형견 유무</div>
          <div>별점</div>
          <div>주소</div>
        </CafeList.CafeList>
      </CafeList.CafeListWrapper>
    </CafeList.Container>
  );
}
