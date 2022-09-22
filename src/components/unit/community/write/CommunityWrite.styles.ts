import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 60%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 7px lightgray;

  @media ${breakPoints.mobile} {
    padding-top: 10px;
    box-shadow: none;
    width: 100%;
    border-radius: 20px;
    box-shadow: 2px 2px 7px lightgray;
  }
`;
export const SubWrap = styled.div`
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 2.3rem;
  font-weight: 650;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    font-weight: 600;
  }
`;

export const Line = styled.div`
  width: 50vw;
  height: 2px;
  border-bottom: 1px solid #ffa500;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 60px;

  @media ${breakPoints.mobile} {
    width: 90vw;
    height: 25vh;
    margin-bottom: 90px;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 20px;
  border: 1px solid lightgray;
  outline: none;
  font-size: 1.2rem;
`;

export const SubTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 650;
  /* margin-bottom: 30px; */
`;

export const ContentsWrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgBtn = styled.img`
  /* width: 23vw; */
  height: 30vh;
  object-fit: contain;
  text-align: center;
  font-size: 1.3rem;
  border: 1px solid lightgray;
  margin-bottom: 30px;
  cursor: pointer;

  :hover {
    border: 2px solid #ffa500;
  }
  @media ${breakPoints.mobile} {
    height: 22vh;
    line-height: 22vh;
    width: 90vw;
    height: 40vh;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${breakPoints.mobile} {
  }
`;

export const ImgDiv = styled.div`
  /* width: 23vw; */
  height: 30vh;
  line-height: 30vh;
  object-fit: contain;
  font-size: 1.3rem;
  color: lightgray;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
  :hover {
    border: 2px solid #ffa500;
  }
  @media ${breakPoints.mobile} {
    height: 22vh;
    line-height: 39vh;
    width: 90vw;
    height: 40vh;
  }
`;

export const UnImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Error = styled.div`
  padding-top: 1.25rem;
  font-size: 1.25rem;
  font-weight: 400;
`;
export const PrevImg = styled.img`
  width: 100%;
  height: 80%;
`;

export const Img = styled.input`
  display: none;
`;

export const Contents = styled(ReactQuill)`
  height: 50vh;
  margin-bottom: 40px;
  @media ${breakPoints.mobile} {
    width: 90vw;
    margin-bottom: 200px;
  }
`;

export const Button = styled.button`
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  width: 10rem;
  height: 3.5rem;
  margin: 60px 0px;
  border: none;
  outline: none;
  background-color: #ffa500;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 90vw;
    /* margin-bottom: 100px; */
  }
`;
