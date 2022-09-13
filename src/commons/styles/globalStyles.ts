import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "myfont";
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "myfont";
    /* src: url("/fonts/Cafe24Dongdong.ttf"); */
    /* src: url("/fonts/Cafe24Syongsyong.ttf"); */
    /* src: url("/fonts/KCC-Murukmuruk.ttf"); */
    /* src: url("/fonts/Maplestory Bold.ttf"); */
    src: url("/fonts/Maplestory Light.ttf");
    /* src: url("/fonts/RixInooAriDuriRegular.ttf"); */
  }

  html {
    font-size: 16px;
    @media ${breakPoints.tablet} {
      font-size: 14px;
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
    }
  }

  body {
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;
