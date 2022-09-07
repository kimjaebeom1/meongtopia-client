import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 60px;
  /* background-color: lightblue; */
`;

export const ReCafeList = styled.div`
  display: flex;
  flex-direction: column;
  order: 1px solid black;
  margin-bottom: 50px;
`;

export const ReTitle = styled.div`
  padding-left: 10%;
  font-weight: 600;
  font-size: 23px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
  /* background-color: lightgrey; */
  padding: 0px 120px;
`;

export const Ad = styled.img`
  width: 300px;
  height: 300px;
`;
export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

export const TopImg = styled.img`
  width: 190px;
  height: 230px;
  transition: 1s;

  :hover {
    transform: rotateY(180deg);
  }
`;

export const Line2 = styled.div`
  width: 1px;
  height: 230px;
  margin: 0px 40px;
  border: 0.5px solid #d9d9d9;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-top: 8rem;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* @media ${breakPoints.mobile} {
    font-weight: 800;
    font-size: 20px;
  } */
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
  margin-bottom: 100px;
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
  width: 100%;
  height: 450px;
  background-color: #f5cf1f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 220px;
  height: 100px;
  margin-bottom: 10px;
`;
// import styled from "@emotion/styled";
// import { width } from "@mui/system";
// import { breakPoints } from "../../../commons/styles/media";

// export const Wrapper = styled.div`
//   width: 100%;
//   margin: 0px auto;
//   margin-top: 60px;
// `;

// export const ReCafeList = styled.div`
//   padding: 0rem 15rem;
//   /* background-color: lightcoral; */
//   @media ${breakPoints.mobile} {
//     padding: 0px;
//   }
// `;

// export const ReTitle = styled.h2``;

// export const ReCafeWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   margin-bottom: 20px;
//   /* padding-left: 5%;
//   padding-right: 5%; */
//   /* border: 2px solid blue; */
// `;

// // export const CafeDetail = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   width: 100%;
// //   height: auto;
// //   /* height: 300px; */
// //   border: 2px solid red;
// // `;
// export const CafeImg = styled.img`
//   max-width: 40%;
//   height: auto;
//   /* height: 100%; */
//   /* padding-right: 6%; */
//   /* margin-right: 70px; */
// `;

// export const CafeInfoWrap = styled.div`
//   width: 30%;
//   display: grid;
//   grid-template-columns: 1fr;
//   flex-direction: column;
//   justify-content: center;
//   /* border: 1px solid blue; */
//   /* padding: 50px 0px; */
//   /* border: 3px solid black; */
//   @media ${breakPoints.mobile} {
//     width: 400px;
//   }
// `;

// export const InfoTitle = styled.div`
//   font-size: 1.2rem;
//   font-weight: 600;
//   margin-bottom: 30px;
// `;
// export const CafeName = styled.div`
//   font-size: 1.8rem;
//   font-weight: 700;
//   margin-bottom: 30px;
// `;
// export const RatingWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-bottom: 15px;
// `;

// export const RatingImg = styled.img`
//   width: 7rem;
//   height: 1.5rem;
// `;
// export const RatingTitle = styled.div`
//   font-size: 1em;
//   font-weight: 600;
//   margin-right: 10px;
// `;

// export const CafeDetailInfo = styled.div`
//   font-size: 0.9rem;
//   margin-bottom: 5px;
//   font-weight: 600;
// `;

// export const MoveToCafe = styled.img`
//   width: 5vw;
//   height: 12vh;
//   border-radius: 100px;
// `;

// export const DescWrap = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   background-color: #ebf5ff;
//   padding: 20px;
// `;

// export const Title = styled.div`
//   font-weight: 800;
//   font-size: 1.9rem;
//   margin-top: 8rem;
//   margin-bottom: 80px;

//   /* @media ${breakPoints.mobile} {
//     font-weight: 800;
//     font-size: 20px;
//   } */
// `;

// export const DetailWrap = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;

//   /* @media ${breakPoints.mobile} {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//   } */
// `;

// export const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-right: 15px;
//   margin-bottom: 100px;
// `;

// export const DescImg = styled.img`
//   width: 5rem;
//   height: 10vh;
//   background-color: lightcyan;
// `;

// export const DescMents = styled.div`
//   font-size: 0.8rem;
// `;

// export const LastPart = styled.img`
//   width: 100%;
//   height: 450px;
//   background-color: #f5cf1f;
// `;
