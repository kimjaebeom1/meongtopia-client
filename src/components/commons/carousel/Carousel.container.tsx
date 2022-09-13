import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as Carousel from "./Carousel.styles";
import { useEffect, useRef, useState } from "react";

// const TOTAL_SLIDES = 4; // 배열0부터 시작하는 것 처럼 0~4 총 5개

export default function CarouselContainerPage() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Carousel.NextArrow />,
    prevArrow: <Carousel.PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  // const CarouselSlick = () => {
  //   const sliderSettings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 2,
  //     slidesToScroll: 2,
  //     autoplay: true,
  //     autoplaySpeed: 2500,
  //   };

  return (
    <Carousel.Wrapper>
      <Slider
        // dots={settings.dots}
        // infinite={settings.infinite}
        // fade={settings.fade}
        // speed={settings.speed}
        // slidesToShow={settings.slidesToShow}
        // slidesToScroll={settings.slidesToScroll}
        // arrows={settings.arrows}
        {...settings}

        // ref={slideRef}
      >
        <div>
          <Carousel.SlideImg src="/images/dog1.jpg" />
        </div>
        <div>
          <Carousel.SlideImg src="/images/dog2.jpg" />
        </div>
        <div>
          <Carousel.SlideImg src="/images/dog3.jpg" />
        </div>
        <div>
          <Carousel.SlideImg src="/images/dog4.jpg" />
        </div>
        <div>
          <Carousel.SlideImg src="/images/dog5.jpg" />
        </div>
      </Slider>
    </Carousel.Wrapper>
  );
}
