import CarouselContainerPage from "../src/components/commons/carousel/Carousel.container";
import LandingRecoCafe from "../src/components/unit/landing/Landing.1recoCafe";
import LandingPopCafe from "../src/components/unit/landing/Landing.2popcafe";
import LandingWebInfo from "../src/components/unit/landing/Landing.3webInfo";
import LandingFooter from "../src/components/unit/landing/Landing.4footer";

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
      <LandingRecoCafe />
      <LandingPopCafe />
      <LandingWebInfo />

      <LandingFooter />
      <Scroll />
    </>
  );
}
