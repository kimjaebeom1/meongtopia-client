import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";
import { ICafeListUIProps } from "./CafeList.types";

const LOCATION_TAGS = ["전체", "홍대", "강남", "대학로", "건대", "잠실"];
const CONDITION_TAGS = [
  "애견동반 가능",
  "야외마당 있음",
  "대형견 있음",
  "아이동반 가능",
];

export default function CafeListUI(props: ICafeListUIProps) {
  return (
    <>
      {/* 검색 컴포넌트 */}
      <CafeList.SearchContainer>
        <CafeList.SearchWrapper>
          <CafeList.Title>애견카페 맞춤 검색</CafeList.Title>
          <CafeList.SearchList>
            <h3>위치별 태그</h3>
            <CafeList.TagsWrapper>
              {LOCATION_TAGS.map((el) => (
                <CafeList.Tag
                  id={el}
                  key={el}
                  isActive={props.locationActive === el}
                  onClick={props.onClickLocationTag}
                >
                  {el}
                </CafeList.Tag>
              ))}
            </CafeList.TagsWrapper>
          </CafeList.SearchList>
          <CafeList.SearchList>
            <h3>조건별 태그</h3>
            <CafeList.TagsWrapper>
              <CafeList.Tag isActive={!props.conditionActive[0]}>
                조건 없음
              </CafeList.Tag>
              {CONDITION_TAGS.map((el) => (
                <CafeList.Tag
                  id={el}
                  key={el}
                  isActive={props.conditionActive.includes(el)}
                  onClick={props.onClickConditionTag}
                >
                  {el}
                </CafeList.Tag>
              ))}
            </CafeList.TagsWrapper>
          </CafeList.SearchList>
          <CafeList.SearchList>
            <h3>매장 이름 검색</h3>
            <CafeList.SearchBar />
          </CafeList.SearchList>
        </CafeList.SearchWrapper>
      </CafeList.SearchContainer>
      {/* 리스트 컴포넌트 */}
      <CafeList.ListContainer>
        <CafeList.ListWrapper>
          <CafeList.CafeListWrapper>
            <CafeList.SliderWrapper>
              <ListSlider />
            </CafeList.SliderWrapper>
            <CafeList.CafeList>
              <CafeList.NameTag>
                {/* {props.data?.fetchStores.name} */}
              </CafeList.NameTag>
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
              <CafeList.NameTag>멍돌핀 애견카페</CafeList.NameTag>
              <CafeList.AddressTag>서울 강남구 논현동</CafeList.AddressTag>
              <CafeList.SelectTag># 동반 가능 # 대형견</CafeList.SelectTag>
              <CafeList.RatingTag>평점 4.67</CafeList.RatingTag>
            </CafeList.CafeList>
          </CafeList.CafeListWrapper>
        </CafeList.ListWrapper>
      </CafeList.ListContainer>
    </>
  );
}
