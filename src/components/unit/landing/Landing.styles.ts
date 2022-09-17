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
`;

export const Span = styled.div`
  font-weight: 100;
  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }
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
`;

export const PhonePic1 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;
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
`;

export const PhonePic2 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;
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
`;

export const PhonePic3 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;
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
`;

export const PhonePic4 = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;
`;

export const Part2 = styled.div`
  width: 50%;
  /* border: 1px solid blue; */
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
    background-position-y: 90px;
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

  /* padding-top: 70px; */
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
    background-position-x: -120px;
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
    background-color: rgba(255, 255, 255, 0.5);
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
    border: 3px solid black;
    flex-direction: column;
    align-items: center;
  }
`;

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
    border: 3px solid blue;
    display: flex;
    flex-direction: row;
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
`;

export const Content3 = styled.div`
  font-size: 1.1rem;

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
    border: 1px solid black;
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
    border: 1px solid black;
  }
`;

export const MainLogo = styled.img`
  width: 20vw;
  height: 17vh;
  margin-bottom: 40px;
  opacity: 1;

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
    font-size: 1.5rem;
    letter-spacing: 3px;
    line-height: 2;
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

  :hover {
    background-color: #ffa500;
    color: white;
  }
`;

export const Logo = styled.img`
  width: 30vw;
  height: 23vh;
  margin-bottom: 30px;
`;
