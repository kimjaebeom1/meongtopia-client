import CarouselContainerPage from "../src/components/commons/carousel/Carousel.container";
import LandingContainerPage from "../src/components/unit/landing/Landing.container";
import Scroll from "../src/commons/scroll";
export default function LandingPage() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <CarouselContainerPage />
      </div>
      <LandingContainerPage />
      <Scroll />
    </>
  );
}
