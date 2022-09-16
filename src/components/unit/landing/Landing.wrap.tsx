import FirstLandingPage from "./Landing.FirstLanding";
import SecondLandingPage from "./Landing.SecondeLanding";
import ThirdLandingPage from "./Landing.Third";
import styled from "@emotion/styled";

// import { css } from "@emotion/react";

const Wrap = styled.div`
  * {
    font-family: "EarlyFontDiary";
  }

  @font-face {
    font-family: "EarlyFontDiary";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  overflow: scroll;
  scroll-snap-type: y mandatory;

  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: start;
    /* width: 100vw; */
  }

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
export default function LandingWrap() {
  return (
    <Wrap>
      <FirstLandingPage />
      <SecondLandingPage />
      <ThirdLandingPage />
    </Wrap>
  );
}
