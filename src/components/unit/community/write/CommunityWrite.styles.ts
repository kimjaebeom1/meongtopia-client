import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 50%;
  margin: 0px auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding-top: 10px;
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
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 60px;
  @media ${breakPoints.mobile} {
    width: 90vw;
    height: 25vh;
  }
`;
export const ImageWra = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 650;
`;

export const ImgBtn = styled.img`
  width: 23vw;
  height: 50vh;
  box-shadow: 2px 2px 4px lightgray;
  object-fit: contain;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;

  :hover {
    color: white;
    border: 3px solid #ffa500;
  }
  @media ${breakPoints.mobile} {
    height: 22vh;
    line-height: 22vh;
    width: 90vw;
    height: 40vh;
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

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  @media ${breakPoints.mobile} {
    width: 100vw;
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

export const ContentsWrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${breakPoints.mobile} {
    width: 90vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
  }
`;
export const Contents = styled(ReactQuill)`
  height: 30vh;
  @media ${breakPoints.mobile} {
    width: 90vw;
    margin-bottom: 200px;
  }
`;

export const Button = styled.button`
  font-size: 1.3rem;
  width: 10rem;
  height: 3.5rem;
  border-radius: 50px;
  margin: 60px 0px;
  border: none;
  outline: none;
  background-color: #ffa500;

  @media ${breakPoints.mobile} {
    width: 90vw;
    /* margin-bottom: 100px; */
  }
`;
