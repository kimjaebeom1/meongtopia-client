import * as DogContentsWrite from "./DogContentsWrite.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DogContentsWriteUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <DogContentsWrite.PrevArrow />,
    nextArrow: <DogContentsWrite.NextArrow />,
  };

  return (
    <DogContentsWrite.Wrapper>
      <Slider {...settings}>
        <DogContentsWrite.SliderItem>
          <img src="/images/dog1.jpg" />
        </DogContentsWrite.SliderItem>
        <DogContentsWrite.SliderItem>
          <img src="/images/dog2.jpg" />
        </DogContentsWrite.SliderItem>
        <DogContentsWrite.SliderItem>
          <img src="/images/dog3.jpg" />
        </DogContentsWrite.SliderItem>
        <DogContentsWrite.SliderItem>
          <img src="/images/dog4.jpg" />
        </DogContentsWrite.SliderItem>
      </Slider>
      {/* <DogContentsWrite.Contents> */}
      <DogContentsWrite.Img src="/images/dogintro1.jpeg" />
      {/* </DogContentsWrite.Contents> */}
    </DogContentsWrite.Wrapper>
  );
}
