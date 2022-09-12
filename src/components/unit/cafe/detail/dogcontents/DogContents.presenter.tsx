import * as DogContents from "./DogContents.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Select, Dropdown, Space, Menu } from "antd";
import KakaoMap from "../../../../commons/map";
import "antd/dist/antd.css";
import { useState } from "react";
import Dompurify from "dompurify";

export default function DetailDogContentsUI(props) {
  const { Option } = Select;
  const [count, setCount] = useState(1);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    // prevArrow: <DogContents.PrevArrow />,
    nextArrow: <DogContents.NextArrow />,
  };

  const handleChange = (value: number) => {
    setCount(value);
  };

  return (
    <DogContents.Wrapper>
      <DogContents.StoreNameTag>
        {/* {props.data?.fetchStore.storeImg[0].url} */}

        {props.data?.fetchStore.name}
        <DogContents.HeadInfo>
          <img src="/images/star.svg" />
          <div>{props.data?.fetchStore.avgRating}.0</div>
          <div
            style={{
              textDecoration: "underline",
            }}
          >
            {props.data?.fetchStore.address}
          </div>
        </DogContents.HeadInfo>
      </DogContents.StoreNameTag>
      <DogContents.CafeImageWrapper>
        <Row gutter={10}>
          <Col span={10}>
            <DogContents.mainDogImg
              src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[0].url}`}
            />
          </Col>
          <Col span={14}>
            <Row gutter={10}>
              <Col span={12}>
                <DogContents.dogImg
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[1].url}`}
                />
              </Col>
              <Col span={12}>
                <DogContents.dogImg
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[2].url}`}
                />
              </Col>
            </Row>
            <Row gutter={10}>
              <Col
                style={{
                  paddingTop: "10px",
                }}
                span={12}
              >
                <DogContents.dogImg
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[3].url}`}
                />
              </Col>
              <Col
                style={{
                  paddingTop: "10px",
                }}
                span={12}
              >
                <DogContents.dogImg
                  src={`https://storage.googleapis.com/${props.data?.fetchStore.storeImg[4].url}`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </DogContents.CafeImageWrapper>
      <DogContents.Line />

      <DogContents.Body>
        <DogContents.CafeInfoWrapper>
          <DogContents.BodyInfoTag>카페 정보</DogContents.BodyInfoTag>
          {props.data?.fetchStore.locationTag.name}
          <br />
          {props.data?.fetchStore.storeTag.map((el) => el.name)}
          <DogContents.DogCount>
            <div>
              <img
                style={{
                  width: "35px",
                  height: "80px",
                }}
                src="/images/bigdog.svg"
              />
              대형견 {props.data?.fetchStore.bigDog} 마리
            </div>
            <div>
              <img
                style={{
                  width: "40px",
                  height: "80px",
                }}
                src="/images/smalldog.svg"
              />{" "}
              소형견 {props.data?.fetchStore.smallDog}마리
            </div>
          </DogContents.DogCount>
          {typeof window !== "undefined" ? (
            <DogContents.DescriptionWrapper
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchStore.description),
              }}
            ></DogContents.DescriptionWrapper>
          ) : (
            <div></div>
          )}
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
          <DogContents.DogTag>강아지 정보</DogContents.DogTag>
          <DogContents.DogListWrapper>
            <Slider {...settings}>
              <DogContents.SliderItem>
                <img src="/images/dog1.jpg" />
              </DogContents.SliderItem>
              <DogContents.SliderItem>
                <img src="/images/dog2.jpg" />
              </DogContents.SliderItem>
              <DogContents.SliderItem>
                <img src="/images/dog3.jpg" />
              </DogContents.SliderItem>
              <DogContents.SliderItem>
                <img src="/images/dog4.jpg" />
              </DogContents.SliderItem>
            </Slider>
            <DogContents.Line />
          </DogContents.DogListWrapper>
        </DogContents.CafeInfoWrapper>
        <DogContents.ReservationWrapper>
          {props.data?.fetchStore.name}
          <DogContents.NumberTag>이용인원</DogContents.NumberTag>
          <DogContents.SelectWrapper defaultValue="1명" onChange={handleChange}>
            <Option value="1">1명</Option>
            <Option value="2">2명</Option>
            <Option value="3">3명</Option>
            <Option value="4">4명</Option>
            <Option value="5">5명</Option>
            <Option value="6">6명</Option>
          </DogContents.SelectWrapper>
          <DogContents.NumberTag>애견동반 수</DogContents.NumberTag>
          <DogContents.SelectWrapper defaultValue="1마리">
            <Option value="1">1마리</Option>
            <Option value="2">2마리</Option>
            <Option value="3">3마리</Option>
          </DogContents.SelectWrapper>
          <DogContents.ReservationBtn>예약하기</DogContents.ReservationBtn>
          <DogContents.EntranceFee>
            <div>1명 입장료</div>
            <div>{`￦${props.data?.fetchStore.entranceFee}원`}</div>
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
            <div>총 합계</div>
            <div>{`￦${props.data?.fetchStore.entranceFee * count}원`}</div>
          </DogContents.Total>
        </DogContents.ReservationWrapper>
      </DogContents.Body>
      <DogContents.Footer>
        <DogContents.Map>
          <DogContents.MapTag>카페 오시는 길</DogContents.MapTag>
          <KakaoMap data={props.data} />
        </DogContents.Map>
      </DogContents.Footer>
    </DogContents.Wrapper>
  );
}
