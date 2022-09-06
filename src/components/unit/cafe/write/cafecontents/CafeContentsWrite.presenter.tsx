import { useEffect } from "react";
import * as CafeContentsWrite from "./CafeContentsWrite.styles";
import moment from "moment";

export default function CafeContentsWriteUI() {
  return (
    <>
      <CafeContentsWrite.Wrapper>
        <img src="/images/list.svg" />
        <CafeContentsWrite.Img>111</CafeContentsWrite.Img>
      </CafeContentsWrite.Wrapper>
    </>
  );
}
