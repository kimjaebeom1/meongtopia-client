import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 60%;
  margin: 0px auto;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 75vh;
  }
`;
export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid black; */
  width: 100%;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 650;
`;

export const TitleInput = styled.input`
  width: 20vw;
  height: 2rem;
`;

export const PrevImg = styled.img`
  width: 30vw;
  height: 100%;
  border: 1px solid black;
`;

export const Img = styled.input`
  display: none;
`;

export const Contents = styled.div``;

export const Button = styled.button`
  width: 6rem;
  height: 2rem;
`;
