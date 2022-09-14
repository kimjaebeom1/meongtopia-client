import { Rate } from "antd";
import "antd/dist/antd.css";
import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";
import { ICafeListUIProps } from "./CafeList.types";
import { v4 as uuidv4 } from "uuid";

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
              <CafeList.Tag
                isActive={props.conditionActive.length === 1}
                onClick={props.onClickConditionTagInit}
              >
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
          {props.data?.fetchStores.map((el) => (
            <CafeList.CafeListWrapper key={uuidv4()}>
              <CafeList.SliderWrapper>
                <ListSlider />
              </CafeList.SliderWrapper>
              <CafeList.CafeList>
                <CafeList.ContentsText>
                  <CafeList.Title>{}</CafeList.Title>
                  <CafeList.RatingWrapper>
                    <Rate value={5} disabled />
                    <span>&nbsp;&nbsp;&nbsp;5.0</span>
                  </CafeList.RatingWrapper>
                </CafeList.ContentsText>
                <CafeList.ContentsText>
                  <span>애견카페 소개글</span>
                  <span>
                    <img
                      style={{
                        width: "40px",
                        height: "30px",
                      }}
                      src="/images/bigdog.svg"
                    />
                    <span>대형견 5 마리 </span>
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      src="/images/smalldog.svg"
                    />
                    <span> 소형견 5마리</span>
                  </span>
                </CafeList.ContentsText>
                <CafeList.Horizon />
                <CafeList.ContentsText>
                  <CafeList.SelectTag>
                    # 애견동반 가능&nbsp;&nbsp; # 대형견 있음
                  </CafeList.SelectTag>
                </CafeList.ContentsText>
                <CafeList.ContentsText>
                  <span>서울시 강남구 논현동 OO</span>
                </CafeList.ContentsText>
                <CafeList.ContentsText>
                  <span>영업시간: 9:00 ~ 20:00</span>
                  <span>₩10000원</span>
                </CafeList.ContentsText>
              </CafeList.CafeList>
            </CafeList.CafeListWrapper>
          ))}
        </CafeList.ListWrapper>
      </CafeList.ListContainer>
    </>
  );
}
