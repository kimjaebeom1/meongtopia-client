import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import "animate.css";
import { keyframes } from "@emotion/react";

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;

const TextUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity:1;
    transform:none;
  }
`;

// ============================================================//
export const FirstLanding = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/images/landingImg1.png");
  background-size: cover;

  /* animation: animate__fadeInLeftBig;
  animation-duration: 2s; */

  @media ${breakPoints.mobile} {
    background-position-x: 83%;
  }
`;

export const Wrap1 = styled.div`
  z-index: 0;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Part1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UnOTitle = styled.div`
  font-size: 2.3rem;
  color: #8b4513;
  border-bottom: 6px double #ffc846;
`;

export const PhoneWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Span = styled.div`
  font-family: "Y_Spotlight";
  font-size: 30px;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const Span1 = styled.div`
  font-family: "YUniverse-B";
  font-size: 1.7rem;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }
`;

export const Span2 = styled.div`
  font-size: 30px;
`;

export const PhoneCon = styled.div`
  font-size: 1.2rem;
`;

export const PhonePic1Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 1.5s;
  }

  @media ${breakPoints.mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const PhonePic1 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhonePic2Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -1%;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }

  @media ${breakPoints.mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const PhonePic2 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhonePic3Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 2.5s;
  }

  @media ${breakPoints.mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const PhonePic3 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhonePic4Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 3s;
  }

  @media ${breakPoints.mobile} {
    height: 13vh;
    width: 100vw;

    /* .isActive {
      animation: FadeInUp;
      animation-duration: 3s;
    } */
  }
`;

export const PhonePic4 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Part2 = styled.div`
  width: 50%;
`;

// ============================================================//
export const SecondeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/images/landingLastImg.png");
  background-size: cover;

  @media ${breakPoints.mobile} {
    background-position-y: 170px;
    background-position-x: 83%;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Wrap2 = styled.div`
  width: 57%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  /* height: 22vh; */
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  /* border: 1px solid black; */
  text-align: center;
  padding-top: 50px;

  .isActive {
    animation: backInLeft;
    animation-duration: 2s;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 30px;
  }
`;

export const OwnerContent = styled.div``;

export const WrapBottom = styled.div`
  width: 100%;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  /* align-items: flex-end; */

  @media ${breakPoints.mobile} {
    height: 50vh;
    width: 80%;
  }

  .isActive {
    animation: backInLeft;
    animation-duration: 2s;
  }
`;

export const Img = styled.img`
  /* height: 80%; */
  z-index: 0;
  background-color: #fff;
  width: 45vw;
  box-shadow: 5px 6px 12px 3px lightgray;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// =============================================================//

export const ThirdWrapper = styled.div`
  margin: 0px auto;
  height: 100vh;
  width: 100%;
  left: 50%;
  background-image: url("/images/landing111.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  animation: ${Fade} 4s;

  @media ${breakPoints.mobile} {
    height: 100%;
    width: 100vw;
    background-position-x: -100px;
  }
`;

export const Wrapper1 = styled.div`
  position: relative;
  left: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    left: 0%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const LeftWrapper = styled.div`
  position: relative;
  /* left: 50%; */
  width: 45rem;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Pick = styled.div``;

export const LeftItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 2s;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const LeftItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 3s;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const LeftItem3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 4s;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Content3 = styled.div`
  font-size: 1.1rem;

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const RightWrapper = styled.div`
  width: 44rem;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    height: 30vh;
    width: 100%;
    margin: 0px auto;
  }
`;

export const MainLogo = styled.img`
  width: 20vw;
  height: 17vh;
  margin-bottom: 40px;
  opacity: 1;
  cursor: pointer;

  .isActive {
    opacity: 1;
  }

  @media ${breakPoints.mobile} {
    width: 30vw;
    height: 7vh;
    margin-bottom: 15px;
  }
`;

export const LogoInfo = styled.div`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 3px;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    letter-spacing: 2.2px;
    line-height: 1.7;
  }
`;

export const Count = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

// =============================================================//

export const LastWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/landingImg4.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  background-color: #fef5ed;
  @media ${breakPoints.mobile} {
    background-position-x: -170px;
    background-position-y: -20px;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 30%;
  position: relative;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${breakPoints.mobile} {
    left: 25%;
    top: -30%;
  }

  .isActive {
    animation: jello;
    animation-duration: 3s;
  }
`;

export const Text = styled.button`
  border: none;
  background-color: white;
  width: 12rem;
  height: 3rem;
  border-radius: 100px;
  font-size: 1.3rem;
  letter-spacing: 10px;
  border: 3px solid #ffa500;
  padding-left: 13px;
  cursor: pointer;

  :hover {
    background-color: #ffa500;
    color: white;
  }

  @media ${breakPoints.mobile} {
    position: relative;
    top: 960%;
  }
`;

export const Logo = styled.img`
  width: 30vw;
  height: 23vh;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 60vw;
  }
`;
