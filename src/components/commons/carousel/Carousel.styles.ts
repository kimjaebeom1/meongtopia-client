import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import Slider from "react-slick";

export const Wrapper = styled.div`
  .slick-list {
    width: 100%;
    background: #fbfbfb;
  }
  .slick-dots {
    margin-bottom: 50px;

    & > li {
      color: white;
    }

    & li > div > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;

    color: lightblue;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    width: 40px;
    height: 40px;
    /* top: 26rem; */
  }

  .slick-prev:before {
    content: "";
    background-image: url("/images/landing22.png");
    background-size: 30px 30px; // 이미지 크기 조절
    width: 40px;
    height: 40px;
    display: block;
    background-repeat: no-repeat;
  }

  .slick-next {
    width: 40px;
    height: 40px;
    right: 0%;
    /* top: 26rem; */
  }

  .slick-next:before {
    content: "";
    background-image: url("/images/landing00.png");
    background-size: 30px 30px; // 이미지 크기 조절
    width: 40px;
    height: 40px;
    display: block;
    background-repeat: no-repeat;
  }
`;

export const Wrapper2 = styled.div``;

export const SlideImg = styled.img`
  margin: auto;
  height: 88vh;
  width: 100%;
  object-fit: cover;
`;

export const PrevArrow = styled.div`
  margin-left: 100px;
  z-index: 2;
  display: block;
  position: absolute;

  /* @media ${breakPoints.mobile} {
    background-color: red;
  } */
`;

export const NextArrow = styled.div`
  margin-right: 100px;
  display: block;
  position: absolute;
  right: 10em;
`;
// ============================================================ //

export const VideoWrap = styled.div`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: red;
  height: 704px;
  margin-bottom: 200px;
`;

export const Video = styled.video`
  object-fit: contain;
  width: 100%;
  /* height: 700px; */
`;

export const VideoDivWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: rgba(255, 255, 255, 0.5);
  width: 24vw;
  z-index: 999;
  position: absolute;
  top: 25vh;
  left: 14%;

  @media ${breakPoints.mobile} {
    position: absolute;
    top: 15vh;
  }
`;

export const VideoContents1 = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  z-index: 999;
`;

export const VideoImg = styled.img`
  width: 60%;
  height: 55%;
`;
