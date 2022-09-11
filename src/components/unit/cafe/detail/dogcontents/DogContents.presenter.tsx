import * as DogContents from "./DogContents.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "antd";

export default function DetailDogContentsUI(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <DogContents.PrevArrow />,
    nextArrow: <DogContents.NextArrow />,
  };
  return (
    <DogContents.Wrapper>
      <DogContents.StoreNameTag>
        {props.data?.fetchStore.name}
      </DogContents.StoreNameTag>
      <Row gutter={16}>
        <Col span={12} />
        <Col span={12} />
      </Row>
      <Row gutter={16}>
        <Col span={8} />
        <Col span={8} />
        <Col span={8} />
      </Row>
      <DogContents.Line />
      강아지 정보
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
      <DogContents.CafeInfoWrapper>
        <div>카페 정보</div>
        <DogContents.DogCount>
          <img
            style={{
              width: "49px",
              height: "80px",
            }}
            src="/images/bigdog.svg"
          />{" "}
          대형견 00 마리
          <img
            style={{
              width: "49px",
              height: "80px",
            }}
            src="/images/smalldog.svg"
          />{" "}
          소형견 00마리
        </DogContents.DogCount>
        {props.data?.fetchStore.description}
        <div>
          {props.data?.fetchStore.address}{" "}
          {props.data?.fetchStore.addressDetail}
        </div>
        <div>
          {props.data?.fetchStore.open} {props.data?.fetchStore.close}
        </div>
      </DogContents.CafeInfoWrapper>
    </DogContents.Wrapper>
  );
}
