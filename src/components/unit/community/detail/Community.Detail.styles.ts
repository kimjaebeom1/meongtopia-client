import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  height: 130vh;
  padding: 20px;

  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 110vh;
  }
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Img = styled.img`
  width: 75%;
  height: 45vh;
  object-fit: cover;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 2px;
`;

export const ContentsWrap = styled.div``;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  width: 75%;
  height: 8vh;
  line-height: 8vh;
  margin-top: 20px;
  padding-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
`;
export const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: 90%;
  height: 2px;
`;
export const Contents = styled.div`
  font-size: 1.2rem;
  width: 75%;
  height: 30vh;
  padding: 20px;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  /* margin-bottom: 150px; */

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Button = styled.div`
  width: 8rem;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: #ffa500;
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 5px;
  padding-left: 1.3%;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
