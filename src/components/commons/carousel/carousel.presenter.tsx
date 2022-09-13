import * as Carousel from "./Carousel.styles";
import Slider from "react-slick";

export default function CarouselPresenter(props) {
  return (
    <Carousel.Wrapper>
      {/* <Carousel.VideoWrap>
        <Carousel.Video
          src="/images/landingVideo3.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
        />
        <Carousel.VideoDivWrap>
          <Carousel.VideoImg src="/images/landinglogo.png" />
        </Carousel.VideoDivWrap>
      </Carousel.VideoWrap> */}

      <Slider {...props.settings}>
        <div>
          <Carousel.SlideImg src="/images/landigndog1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>
              멍토피아에 오신 걸 환영합니다
            </Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
        <div>
          <Carousel.SlideImg src="/images/landigndog1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>
              멍토피아에 오신 걸 환영합니다
            </Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
        <div>
          <Carousel.SlideImg src="/images/landigndog1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>3333</Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
        <div>
          <Carousel.SlideImg src="/images/landigndog1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>44444</Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
        <div>
          <Carousel.SlideImg src="/images/landigndog1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>55555</Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
      </Slider>
    </Carousel.Wrapper>
  );
}
