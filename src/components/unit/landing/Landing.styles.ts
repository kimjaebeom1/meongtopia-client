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

// ============================================================//
export const FirstLanding = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/images/landingImg1.png");
  background-size: cover;
  opacity: 1;
  animation: ${Fade} 4s;
  /* animation: animate__fadeInLeftBig;
  animation-duration: 2s; */

  @media ${breakPoints.mobile} {
    background-position-x: 83%;
  }
`;

export const Wrap1 = styled.div`
  /* width: 100%; */
  /* height: 60vh; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid black; */
  margin-top: 30px;
  /* transition: all 1.5s ease-in-out; */

  .isActive {
    /* animation: fadeInDown; */
    /* animation-duration: 2s; */
    opacity: 1;
  }
`;

export const Part1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
`;

export const Contents = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-top: 40px;
  letter-spacing: 8px;
  line-height: 2;
  transition-delay: 1s;
`;

export const Content = styled.div`
  font-size: 1.3rem;
  transition-delay: 1s;
`;

export const Strong = styled.div`
  font-weight: 600;
  color: #ffa500;
  text-shadow: 3px 3px 2px white;
  font-size: 2rem;
  transition-delay: 1s;
`;

export const Highlight = styled.div`
  background-color: lightyellow;
  transition-delay: 1s;
`;

export const Logo = styled.img`
  width: 17rem;
  height: 14vh;
  margin: 20px 0px;
  transition-delay: 3s;

  @media ${breakPoints.mobile} {
    width: 21rem;
    height: 14vh;
  }

  .isActive {
    /* animation: fadeInDown; */
    animation-duration: 4s;
    opacity: 1;
  }
`;

// ============================================================//
export const SecondeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("/images/landingImg33.png");
  background-size: cover;
  border: 2px solid red;

  @media ${breakPoints.mobile} {
    background-position-y: 90px;
    background-position-x: 83%;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Wrap = styled.div`
  width: 50%;
  height: 90vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  /* border: 1px solid black; */

  .isActive {
    animation: fadeInDown;
    animation-duration: 2s;
  }

  @media ${breakPoints.mobile} {
    height: 50vh;
    width: 80%;
  }
`;

// =============================================================//

export const ThirdWrapper = styled.div`
  margin: 0px auto;
  height: 100vh;
  width: 100%;
  background-image: url("/images/landingImg3-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    height: 100vh;
    width: 100%;
    background-position-x: -123px;
    background-position-y: 90px;
  }
`;

export const LeftWrapper = styled.div`
  position: relative;
  width: 35rem;
  height: 45vh;
  border: 2px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media ${breakPoints.mobile} {
    height: 60vh;
  }
`;

export const LeftItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid blue;
  width: 33%;
`;

export const LeftItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid red;
  width: 33%;
`;
export const LeftItem3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid pink;
  width: 33%;
`;

export const RightWrapper = styled.div`
  position: relative;
  /* left: 50%; */
  width: 40rem;
  height: 80vh;
  border: 1px solid black;

  @media ${breakPoints.mobile} {
    height: 60vh;
    position: relative;
    left: 0%;
    width: 85%;
    margin: 0px auto;
  }
`;
export const Count = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

// =============================================================//

// 이거 지우면 안된다
// export const DivWrap = styled.div`
//   transition: all 1.5s ease-in-out;

//   .isActive {
//     animation: fadeInUp;
//     animation-duration: 2s;
//     opacity: 1;
//   }
// `;

export const DivWrap1 = styled.div`
  height: 100vh;
  width: 100%;
  /* padding-top: 50px; */
  .isActive {
    animation: slideInDown;
    animation-duration: 2s;
  }
`;

export const DivWrap2 = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0px auto;
  height: 100vh;

  background-color: #ffdcdc;
  border-bottom-right-radius: 300px;
  border-bottom-left-radius: 300px;
  .isActive {
    animation: fadeInUp;
    animation-duration: 2s;
  }
`;

export const ReTitle = styled.div`
  width: 80%;
  font-size: 1.6rem;
  display: flex;
  margin-bottom: 20px;
  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const Meong = styled.img`
  width: 30px;
  height: 30px;
`;

export const ReCafeWrap = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    height: 100%;
  }
`;

// export const Ad = styled.img`
//   width: 300px;
//   height: 300px;
// `;
export const FlipWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Filp = styled.div`
  width: 18rem;
  height: 20rem;
  position: relative;
  margin: 0px 5px;

  :hover {
    cursor: pointer;
  }
`;

export const TopWrap = styled.div`
  /* flex-direction: column; */
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }

  .isActive {
    animation: animate__fadeInLeft;
    animation-duration: 2s;
    opacity: 1;
  }
`;

export const TopWrap2 = styled.div`
  /* flex-direction: column; */
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }

  .isActive {
    animation: animate__bounceInRight;
    animation-duration: 2s;
    opacity: 1;
  }
`;

export const TopWrap3 = styled.div`
  /* flex-direction: column; */
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }

  .isActive {
    animation: animate__fadeInRight;
    animation-duration: 2s;
    opacity: 1;
  }
`;

export const TopImgType = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
`;

export const TopImgFE = styled(TopImgType)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url("/images/landingcafe2.jpeg");
  background-size: 100% 100%;
`;

export const TopImgBE = styled(TopImgType)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/images/landingTopImg.jpg");
  background-size: cover;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TopContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const ImgStoreInfo = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 90px;
`;

export const ImgStoreName = styled.div`
  /* height: 100%; */
  text-align: end;
  font-size: 1.3rem;
  font-weight: 600;
  word-break: break-all;
  color: black;
  padding-right: 10px;
`;

export const Rank = styled.div`
  /* height: 100%; */
  line-height: 100%;
  font-size: 4rem;
  font-weight: 600;
  word-break: break-all;
  color: orange;
  margin-bottom: 30px;
`;
export const ImgRating = styled.div`
  width: 100%;
  height: 20px;
  font-size: 1rem;
  font-weight: 600;
  word-break: break-all;
  text-align: end;
  color: white;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const ImgDesc = styled.div`
  width: 100%;
  height: 20px;
  font-size: 1rem;
  font-weight: 600;
  word-break: break-all;
  text-align: center;
`;

export const Line2 = styled.div`
  width: 1px;
  height: 230px;
  margin: 0px 40px;
`;

export const CafeDetail = styled.div`
  /* display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between; */
  /* background-color: lightyellow; */
  border: 2px solid red;
`;

export const CafeImg = styled.img`
  width: 80%;
  height: 270px;

  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }

  @media ${breakPoints.mobile} {
    /* transform: translateY(10px); */
    transform: scale(1.2);
  }
`;

export const CafeInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid black; */
  /* background-color: lightgoldenrodyellow; */
`;

export const InfoTitle = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const CafeName = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const RatingWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const RatingImg = styled.img`
  width: 7rem;
  height: 1.5rem;
`;
export const RatingTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
`;

export const CafeDetailInfo = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const MoveToCafe = styled.img`
  width: 5vw;
  height: 12vh;
  border-radius: 100px;
`;

export const Line = styled.div`
  width: 70%;
  height: 2px;
  border-bottom: 1px solid lightgray;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  /* height: 100vh; */

  /* object-fit: cover; */
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  /* margin-top: 196px; */
`;

export const Video = styled.video`
  z-index: -1;
  width: 100%;
  /* width: 100%;
  height: 90vh; */
  /* height: 500px; */
`;

export const Title = styled.div`
  z-index: 1;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DetailWrap = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 40px;
  /* margin-bottom: 100px; */
`;

export const DescImg = styled.img`
  width: 5rem;
  height: 10vh;
  background-color: lightcyan;
`;

export const MentWrap = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const DescMents1 = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #f5cf1f;
  margin-bottom: 10px;
`;

export const DescMents2 = styled.div`
  font-size: 0.8rem;
  text-align: start;
`;

export const LastPart = styled.div`
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-color: #f5cf1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BallWrap = styled.div`
  z-index: 1;
  display: flex;
  justify-content: start;
  flex-direction: row;
  width: 100%;
`;

export const Btn = styled.button`
  width: 17rem;
  height: 50px;
  font-size: 1.3rem;
  border-radius: 50px;
  border: none;
  background-color: orange;
  :hover {
    background-color: white;
    border: 3px solid orange;
  }
`;
