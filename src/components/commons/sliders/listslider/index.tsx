import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  .slick-list {
    width: 100%;
    background: #fbfbfb;
    border-radius: 1rem;
  }
  .slick-dots {
    margin-bottom: 50px;

    & > li {
      color: white;
    }

    & li > div > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const SliderItem = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 2rem;
    padding: 0.5rem;
  }
`;

const NextArrow = styled.div`
  display: block;
  margin-right: 50px;
`;

const PrevArrow = styled.div`
  display: block;
  z-index: 2;
  margin-left: 50px;
`;

export default function ListSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderItem>
          <img src="/images/dog1.jpg" />
        </SliderItem>
        <SliderItem>
          <img src="/images/dog2.jpg" />
        </SliderItem>
        <SliderItem>
          <img src="/images/dog3.jpg" />
        </SliderItem>
        <SliderItem>
          <img src="/images/dog4.jpg" />
        </SliderItem>
        <SliderItem>
          <img src="/images/dog5.jpg" />
        </SliderItem>
      </Slider>
    </Wrapper>
  );
}
