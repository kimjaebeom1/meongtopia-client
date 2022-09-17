import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { IStore } from "../../../../commons/types/generated/types";
import { breakPoints } from "../../../../commons/styles/media";

interface IListSliderProps {
  url: any;
}

const Wrapper = styled.div`
  .slick-slide {
    width: 100%;
    /* margin-right: 1rem; */
  }
  .slick-list {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .slick-dots {
    margin-bottom: 35px;

    & > li {
      color: white;
    }

    /* & li > div > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    } */
  }
`;

const SliderItem = styled.div`
  & > img {
    width: 410px;
    height: 296px;
    object-fit: cover;
    border-radius: 8px;

    @media ${breakPoints.mobile} {
      width: 100%;
      height: 180px;
    }
  }
`;

// const NextArrow = styled.div`
//   display: block;
//   margin-right: 40px;
// `;

// const PrevArrow = styled.div`
//   display: block;
//   z-index: 2;
//   margin-left: 30px;
// `;

export default function ListSlider(props: IListSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {props.url.storeImg.map((el: any) => (
          <SliderItem key={el}>
            {el.url ? (
              <img src={`https://storage.googleapis.com/${el.url}`} />
            ) : (
              <img src="/images/dogcharacter.jpg" />
            )}
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
}
