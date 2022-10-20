import * as DogContents from "./DogContents.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Select } from "antd";
import KakaoMap from "../../../../commons/map";
import "antd/dist/antd.css";
import Dompurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import ReviewWrite from "../../review/ReviewWrite.container";

export default function DetailDogContentsUI(props: any) {
  const { Option } = Select;

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <DogContents.NextArrow />,
  };

  const mobileSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <DogContents.NextArrow />,
  };

  return (
    <DogContents.Wrapper>
      <DogContents.StoreNameTag>
        <div>{props.data?.fetchStore.name}</div>
        <DogContents.HeadInfo>
          <div>
            <DogContents.Star
              value={props.data?.fetchStore.avgRating}
              disabled
            />
            <div
              style={{
                display: "flex",
                paddingTop: "0.5rem",
              }}
            >
              {props.data?.fetchStore.avgRating}
              <div
                style={{
                  paddingLeft: "0.5rem",
                  textDecoration: "underline",
                }}
              >
                후기 {props.reviewCount?.ReviewCount}개
              </div>
            </div>
          </div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            저장
            {props.picked ? (
              <DogContents.Toggled onClick={props.onClickToggle} />
            ) : (
              <DogContents.Toggle onClick={props.onClickToggle} />
            )}{" "}
          </div>
        </DogContents.HeadInfo>
      </DogContents.StoreNameTag>

      {/* 모바일 이미지 슬라이더 */}
      <DogContents.MobileCafeListWrapper>
        <Slider {...mobileSettings}>
          {props.data?.fetchStore.storeImg.map((el: any) => (
            <DogContents.MobileSliderItem key={uuidv4()}>
              <img src={`https://storage.googleapis.com/${el.url}`} />
            </DogContents.MobileSliderItem>
          ))}
        </Slider>
      </DogContents.MobileCafeListWrapper>

      <DogContents.CafeImageWrapper>
        <Row gutter={{ xs: 4, lg: 8, md: 8 }}>
          <Col span={10}>
            <Row gutter={{ xs: 4, md: 0, lg: 0, xl: 0 }}>
              {props.data?.fetchStore.storeImg[0].url ? (
                <DogContents.mainCafeImg
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[0].url}`}
                />
              ) : (
                <DogContents.mainCafeImg src="/images/ready.jpg" />
              )}
            </Row>
          </Col>
          <Col span={14}>
            <Row gutter={{ xs: 4, lg: 8, md: 6 }}>
              <Col span={12}>
                {props.data?.fetchStore.storeImg[1].url ? (
                  <DogContents.cafeImg
                    src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[1].url}`}
                  />
                ) : (
                  <DogContents.cafeImg src="/images/ready.jpg" />
                )}
              </Col>
              <Col span={12}>
                {props.data?.fetchStore.storeImg[2].url ? (
                  <DogContents.cafeImg
                    src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[2].url}`}
                  />
                ) : (
                  <DogContents.cafeImg src="/images/ready.jpg" />
                )}
              </Col>
            </Row>
            <Row gutter={{ xs: 4, lg: 8, md: 8 }}>
              <Col
                style={{
                  paddingTop: "0.625rem",
                }}
                span={12}
              >
                {props.data?.fetchStore.storeImg[3].url ? (
                  <DogContents.cafeImg
                    src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[3].url}`}
                  />
                ) : (
                  <DogContents.cafeImg src="/images/ready.jpg" />
                )}
              </Col>
              <Col
                style={{
                  paddingTop: "0.625rem",
                }}
                span={12}
              >
                {props.data?.fetchStore.storeImg[4].url ? (
                  <DogContents.cafeImg
                    src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[4].url}`}
                  />
                ) : (
                  <DogContents.cafeImg src="/images/ready.jpg" />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </DogContents.CafeImageWrapper>
      <DogContents.Line />

      {/* 카페소개 */}
      <DogContents.Body>
        <DogContents.CafeInfoWrapper>
          <DogContents.BodyInfoTag>카페 소개</DogContents.BodyInfoTag>

          <DogContents.TagWrapper>
            <div>
              {props.data?.fetchStore.storeTag.map((el: any) => (
                <DogContents.StoreTag
                  key={uuidv4()}
                >{`# ${el.name}`}</DogContents.StoreTag>
              ))}
            </div>
          </DogContents.TagWrapper>

          <div
            style={{
              color: "orangered",
              paddingTop: "1rem",
            }}
          >
            입장료를 내면 원하시는 음료는 1잔 무료로 드립니다.
          </div>

          {typeof window !== "undefined" ? (
            <DogContents.DescriptionWrapper
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchStore.description),
              }}
            ></DogContents.DescriptionWrapper>
          ) : (
            <div></div>
          )}
          <DogContents.BodyLine />
          <DogContents.MobileLine />

          <DogContents.BodyInfoTag>카페 세부정보</DogContents.BodyInfoTag>

          <DogContents.AddressWrapper>
            <img src="/images/mapIcon.svg" />
            <div>
              {props.data?.fetchStore.address}{" "}
              {props.data?.fetchStore.addressDetail}
            </div>
          </DogContents.AddressWrapper>
          <DogContents.TimeWrapper>
            <DogContents.Time />
            <div>
              오전 {props.data?.fetchStore.open} ~ 오후{" "}
              {props.data?.fetchStore.close}
            </div>
          </DogContents.TimeWrapper>
          <DogContents.TimeWrapper>
            <DogContents.Phone />
            <div>{props.data?.fetchStore.phone}</div>
          </DogContents.TimeWrapper>
          <DogContents.MobileLine />
          <DogContents.BodyLine />

          <DogContents.BodyInfoTag>강아지 소개</DogContents.BodyInfoTag>
          <DogContents.DogCount>
            <div>
              <img
                style={{
                  width: "35px",
                  height: "80px",
                }}
                src="/images/bigdog.svg"
              />
              대형견 : {props.data?.fetchStore.bigDog} 마리
            </div>
            <div>
              <img
                style={{
                  width: "40px",
                  height: "80px",
                }}
                src="/images/smalldog.svg"
              />{" "}
              소형견 : {props.data?.fetchStore.smallDog}마리
            </div>
          </DogContents.DogCount>
          {/* PC용 강아지 소개 */}
          <DogContents.PcDogWrapper>
            {props.data?.fetchStore.pet.length === 1 ? (
              <DogContents.DogListWrapper>
                <DogContents.oneImage
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.pet[0].petImgUrl}`}
                />
                <div>이름: {props.data?.fetchStore.pet[0].name}</div>
                <div>나이: {props.data?.fetchStore.pet[0].age}</div>
                <div>견종: {props.data?.fetchStore.pet[0].breed}</div>
                <div>성격: {props.data?.fetchStore.pet[0].description}</div>
              </DogContents.DogListWrapper>
            ) : (
              <DogContents.DogListWrapper>
                <Slider {...settings}>
                  {props.data?.fetchStore.pet.map((el: any) => (
                    <DogContents.SliderItem key={uuidv4()}>
                      <img
                        src={`https://storage.googleapis.com/${el.petImgUrl}`}
                      />
                      <div>이름: {el.name}</div>
                      <div>나이: {el.age}</div>
                      <div>견종: {el.breed}</div>
                      <div>성격: {el.description}</div>
                    </DogContents.SliderItem>
                  ))}
                </Slider>
              </DogContents.DogListWrapper>
            )}
          </DogContents.PcDogWrapper>

          {/* 모바일용 강아지 소개 */}
          <DogContents.MobileDogListWrapper>
            {props.data?.fetchStore.pet.length === 1 ? (
              <DogContents.DogListWrapper>
                <DogContents.oneImage
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.pet[0].petImgUrl}`}
                />
                <div>이름: {props.data?.fetchStore.pet[0].name}</div>
                <div>나이: {props.data?.fetchStore.pet[0].age}</div>
                <div>견종: {props.data?.fetchStore.pet[0].breed}</div>
                <div>성격: {props.data?.fetchStore.pet[0].description}</div>
              </DogContents.DogListWrapper>
            ) : (
              <DogContents.DogListWrapper>
                <Slider {...mobileSettings}>
                  {props.data?.fetchStore.pet.map((el: any) => (
                    <DogContents.SliderItem key={uuidv4()}>
                      {el.petImgUrl === "" ? (
                        <img src="/images/dogcharacter.jpg" />
                      ) : (
                        <img
                          src={`https://storage.googleapis.com/${el.petImgUrl}`}
                        />
                      )}

                      <div>이름: {el.name}</div>
                      <div>나이: {el.age}</div>
                      <div>견종: {el.breed}</div>
                      <div>성격: {el.description}</div>
                    </DogContents.SliderItem>
                  ))}
                </Slider>
              </DogContents.DogListWrapper>
            )}
          </DogContents.MobileDogListWrapper>
          <DogContents.BodyLine />

          <DogContents.Map>
            <DogContents.MapTag>카페 오시는 길</DogContents.MapTag>
            <KakaoMap data={props.data} />
          </DogContents.Map>
        </DogContents.CafeInfoWrapper>

        {/* 예약하기 */}
        <DogContents.ReservationWrapper>
          <span>예약하기</span>
          {props.data?.fetchStore.name}
          <DogContents.NumberTag>이용인원</DogContents.NumberTag>
          <DogContents.SelectWrapper
            defaultValue="1명"
            onChange={props.handleChange}
          >
            <Option value="1">1명</Option>
            <Option value="2">2명</Option>
            <Option value="3">3명</Option>
            <Option value="4">4명</Option>
            <Option value="5">5명</Option>
            <Option value="6">6명</Option>
          </DogContents.SelectWrapper>
          <DogContents.NumberTag>애견동반 수</DogContents.NumberTag>
          <DogContents.SelectWrapper
            onChange={props.onChangePetCount}
            defaultValue="없음"
          >
            <Option value="0">없음</Option>
            <Option value="1">1마리</Option>
            <Option value="2">2마리</Option>
            <Option value="3">3마리</Option>
            <Option value="4">4마리</Option>
          </DogContents.SelectWrapper>
          {props.reservation === true ? (
            <DogContents.UnReservationBtn>
              예약불가
            </DogContents.UnReservationBtn>
          ) : (
            <DogContents.ReservationBtn onClick={props.onClickReservation}>
              예약하기
            </DogContents.ReservationBtn>
          )}

          <DogContents.EntranceFee>
            <div>1인 입장료</div>
            <div>{`${props.data?.fetchStore.entranceFee.toLocaleString()}원`}</div>
          </DogContents.EntranceFee>
          <DogContents.EntranceFee>
            <div>애견동반 입장료</div>
            <div>무료</div>
          </DogContents.EntranceFee>
          <DogContents.FeeInfo>
            입장료는 음료를 포함한 가격입니다.
          </DogContents.FeeInfo>

          <DogContents.ReservationLine />
          <DogContents.Total>
            <div>총 합계 </div>
            <div>{`1인 입장료(${props.data?.fetchStore.entranceFee.toLocaleString()}원) x 이용인원(${
              props.count
            }명)`}</div>
          </DogContents.Total>
          <DogContents.TotalCount>{`${(
            props.data?.fetchStore.entranceFee * props.count
          ).toLocaleString()}원`}</DogContents.TotalCount>
        </DogContents.ReservationWrapper>
      </DogContents.Body>
      <DogContents.Line />

      <DogContents.Footer>
        <DogContents.FooterInfo>
          <ReviewWrite />
        </DogContents.FooterInfo>
      </DogContents.Footer>
    </DogContents.Wrapper>
  );
}
