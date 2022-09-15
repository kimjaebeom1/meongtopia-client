import LandingRecoCafe from "./Landing.1recoCafe";
import LandingPopCafe from "./Landing.2popcafe";
import LandingWebInfo from "./Landing.3webInfo";
import LandingFooter from "./Landing.4footer";
import CarouselContainerPage from "../../commons/carousel/Carousel.container";
import styled from "@emotion/styled";

const Wrap = styled.div`
  overflow: scroll;
  scroll-snap-type: y mandatory;

  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  & > div {
    scroll-snap-align: start;
    /* width: 100vw; */
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
export default function LandingWrap() {
  return (
    <Wrap>
      <CarouselContainerPage />
      <LandingRecoCafe />
      <LandingPopCafe />
      <LandingWebInfo />
      <LandingFooter />
    </Wrap>
  );
}
