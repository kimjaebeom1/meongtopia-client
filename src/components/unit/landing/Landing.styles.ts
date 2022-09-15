import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import "animate.css";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
`;

export const DivWrap = styled.div`
  transition: all 1.5s ease-in-out;

  .isActive {
    animation: fadeInUp;
    animation-duration: 2s;
    opacity: 1;
  }
`;

export const DivWrap1 = styled.div`
  height: 100vh;
  width: 100%;
  /* padding-top: 50px; */
  .isActive {
    animation: fadeInUp;
    animation-duration: 2s;
  }
`;

export const DivWrap2 = styled.div`
  height: 100vh;
  width: 100%;

  margin: 0px auto;
  height: 100vh;
  border: 1px solid black;

  .isActive {
    animation: fadeInUp;
    animation-duration: 2s;
  }
`;

export const ReCafeList = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  background-color: #ffdcdc;
  animation: fadeInUp;
  animation-duration: 2s;
`;

// export const DogsImg = styled.img`
//   z-index: -1;
//   width: 100%;
//   height: 200px;
//   position: relative;
//   top: 10px;
// `;

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
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.1s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
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
  /* :hover {
    transform: rotateY(180deg);
  } */
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DetailWrap = styled.div`
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

export const Logo = styled.img`
  z-index: 999;
  width: 17rem;
  height: 120px;
  margin-bottom: 30px;
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
