import * as Carousel from "./Carousel.styles";
import Slider from "react-slick";

export default function CarouselPresenter(props: any) {
  return (
    <Carousel.Wrapper>
      <Slider {...props.settings}>
        <div>
          <Carousel.SlideImg src="/images/carousel1.png" />
          <Carousel.VideoDivWrap>
            <Carousel.VideoContents1>
              멍토피아에 오신 걸 환영합니다
            </Carousel.VideoContents1>
          </Carousel.VideoDivWrap>
        </div>
        <div>
          <Carousel.SlideImg src="/images/carousel2.png" />
          <Carousel.VideoDivWrap2>
            <Carousel.VideoContents2>
              귀여운 강아지들을 만날 수 있어요
            </Carousel.VideoContents2>
          </Carousel.VideoDivWrap2>
        </div>
        <div>
          <Carousel.SlideImg src="/images/carousel3.png" />
          <Carousel.VideoDivWrap3>
            <Carousel.VideoContents3>
              가까이 있는 강아지들을 만나러 오세요
            </Carousel.VideoContents3>
          </Carousel.VideoDivWrap3>
        </div>
        {/* <div>
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
        </div> */}
      </Slider>
    </Carousel.Wrapper>
  );
}
