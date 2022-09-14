import { Rate } from "antd";
import "antd/dist/antd.css";
import ListSlider from "../../../commons/sliders/listslider";
import * as CafeList from "./CafeList.styles";
import { ICafeListUIProps } from "./CafeList.types";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import InfiniteScroll from "react-infinite-scroller";

const LOCATION_TAGS = ["전체", "홍대", "강남", "대학로", "건대", "잠실"];
const CONDITION_TAGS = [
  "애견동반 가능",
  "야외마당 있음",
  "대형견 있음",
  "아이동반 가능",
];

export default function CafeListUI(props: ICafeListUIProps) {
  let data = props.data?.fetchStores;

  // 위치별 태그 필터링
  if (props.locationActive !== "전체") {
    const dataLocation = data?.filter(
      (el) => el.locationTag.name === props.locationActive
    );
    data = dataLocation;
  }

  // 조건별 태그 필터링
  if (props.conditionActive.length > 1) {
    let dataCondition = data;

    for (let i = 0; i < CONDITION_TAGS.length; i++) {
      if (props.conditionActive.includes(CONDITION_TAGS[i])) {
        dataCondition = dataCondition?.filter((el) => {
          for (let j = 0; j < el.storeTag.length; j++) {
            if (el.storeTag[j].name === CONDITION_TAGS[i]) {
              return el;
            }
          }
        });
      }
    }
    data = dataCondition;
  }

  // 검색 필터링
  if (props.search) {
    const dataSearch = data?.filter((el) => el.name.includes(props.search));
    data = dataSearch;
  }

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
            <CafeList.SearchBar onChange={props.onChangeSearch} />
          </CafeList.SearchList>
        </CafeList.SearchWrapper>
      </CafeList.SearchContainer>
      {/* 리스트 컴포넌트 */}
      <CafeList.ListContainer>
        <InfiniteScroll
          pageStart={1}
          loadMore={props.onFetchMore}
          hasMore={true}
        >
          <CafeList.ListWrapper>
            {data?.map((el) => (
              <CafeList.CafeListWrapper key={uuidv4()}>
                <CafeList.SliderWrapper>
                  <ListSlider url={el} />
                </CafeList.SliderWrapper>
                <CafeList.CafeList
                  id={el.storeID}
                  onClick={props.onClickMoveToDetail}
                >
                  <CafeList.ContentsText>
                    <CafeList.Title>{el.name}</CafeList.Title>
                    <CafeList.RatingWrapper>
                      <Rate value={el.avgRating} disabled />
                      <span>&nbsp;&nbsp;&nbsp;{el.avgRating}</span>
                    </CafeList.RatingWrapper>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(el.description),
                      }}
                    />
                    <CafeList.DogWrapper>
                      <img
                        style={{
                          width: "30px",
                          height: "28px",
                        }}
                        src="/images/bigdog.svg"
                      />
                      <span
                        style={{ margin: "0 1rem 0 0.5rem" }}
                      >{`대형견 ${el.bigDog} 마리`}</span>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        src="/images/smalldog.svg"
                      />
                      <span
                        style={{ marginLeft: "0.5rem" }}
                      >{`소형견 ${el.smallDog} 마리`}</span>
                    </CafeList.DogWrapper>
                  </CafeList.ContentsText>
                  <CafeList.Horizon />
                  <CafeList.ContentsText>
                    <CafeList.SelectTag>
                      {el.storeTag.map((el) => (
                        <span
                          key={el.tagID}
                          style={{ marginRight: "1rem" }}
                        >{`# ${el.name}`}</span>
                      ))}
                    </CafeList.SelectTag>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <span>{el.address}</span>
                  </CafeList.ContentsText>
                  <CafeList.ContentsText>
                    <span>{`${el.open} ~ ${el.close}`}</span>
                    <span>{`${el.entranceFee.toLocaleString()}원`}</span>
                  </CafeList.ContentsText>
                </CafeList.CafeList>
              </CafeList.CafeListWrapper>
            ))}
          </CafeList.ListWrapper>
        </InfiniteScroll>
      </CafeList.ListContainer>
    </>
  );
}
