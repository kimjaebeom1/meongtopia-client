import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { IStore } from "../../../../commons/types/generated/types";
import { breakPoints } from "../../../../commons/styles/media";

interface IListSliderProps {
  url: IStore;
}

const Wrapper = styled.div`
  .slick-slider {
    width: 100%;
    margin: 0;

    @media ${breakPoints.mobile} {
      width: 86vw;
    }
  }
  .slick-list {
    width: 100%;
    height: 100%;
  }
  .slick-dots {
    margin-bottom: 35px;

    & > li {
      color: white;
    }
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slick-next,
  .slick-prev {
    left: 0;
    right: 0;
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

export default function ListSlider(props: IListSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
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
