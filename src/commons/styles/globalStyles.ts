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
    /* src: url("/fonts/Maplestory Light.ttf"); */
  }

  html {
    font-size: 16px;
    @media ${breakPoints.tablet} {
      font-size: 14px;
      max-width: 991px;
      min-width: 768px;
    }
    @media ${breakPoints.mobile} {
      font-size: 12px;
      max-width: 767px;
      min-width: 370px;
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
