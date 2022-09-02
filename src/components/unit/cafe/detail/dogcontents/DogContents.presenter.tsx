import * as DogContents from "./DogContents.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DetailDogContentsUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <DogContents.PrevArrow />,
    nextArrow: <DogContents.NextArrow />,
  };
  return (
    <DogContents.Wrapper>
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
      {/* <DogContents.Contents> */}
      <DogContents.Img src="/images/dogintro1.jpeg" />
      {/* </DogContents.Contents> */}
    </DogContents.Wrapper>
  );
}
