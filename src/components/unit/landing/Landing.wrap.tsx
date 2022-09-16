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

  @font-face {
    font-family: "Happiness-Sans-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Bold.woff2")
      format("woff2");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "MICEGothic Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "YUniverse-B";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_yuniverse@1.0/YUniverse-B.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Y_Spotlight";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/Y_Spotlight.woff")
      format("woff");
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
      <ThirdLandingPage />
      <FirstLandingPage />
      <SecondLandingPage />
    </Wrap>
  );
}
