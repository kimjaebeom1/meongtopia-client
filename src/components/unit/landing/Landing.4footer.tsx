import * as Landing from "./Landing.styles";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ball = keyframes`
  0% {
    top:1px;
  }
  95% {
    width: 100px;
  }
  to {
    top:155px;
    width:115px;
    height:90px;
  }
`;

const ball2 = keyframes`
// 애니메이션의 시작 프레임
  0% {
    top:-100px;
  }
  //애니메이션의 마지막 프레임
  95% {
    width: 100px;
  }
  // 애니메이션의 시작 프레임. 0%와 같다.
  from{
    
  }
  //애니메이션의 마지막 프레임. 100%와 같음
  to {
    top:140px;
    width:100px;
    height:90px;
  }
`;

const Div = styled.div`
  margin: 0px 10px;
  position: relative;
  left: 100px;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffeb93;
  animation: ${ball} 1s ease-in Infinite Alternate;
`;

const Div2 = styled.div`
  margin: 20px;
  position: relative;
  left: 100px;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffeb93;
  animation: ${ball2} 0.5s ease-in Infinite Alternate;
`;

const Div3 = styled.div`
  margin: 20px;
  position: relative;
  left: 100px;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff1b5;
  animation: ${ball2} 0.7s ease-in Infinite Alternate;
`;

export default function LandingFooter() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.

  return (
    <>
      <Landing.LastPart>
        <Landing.BallWrap>
          <Div3 />
          <Div />
          <Div2 />
        </Landing.BallWrap>
        <Landing.Logo src="/images/landinglogo2.png" />
        <Landing.BallWrap>
          <Div />
          <Div3 />
          <Div2 />
        </Landing.BallWrap>
      </Landing.LastPart>
    </>
  );
}
