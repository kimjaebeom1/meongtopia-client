import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselPresenter from "./carousel.presenter";
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
    arrows: true,
    nextArrow: <Carousel.NextArrow />,
    prevArrow: <Carousel.PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return <CarouselPresenter settings={settings} />;
}
