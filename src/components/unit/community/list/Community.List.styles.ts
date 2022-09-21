import styled from "@emotion/styled";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  height: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Boxes = styled.div`
  /* display: grid;
  grid-template-columns: repeat(5, 356px);
  grid-template-rows: repeat(1,300px); */
  /* justify-content: space-between; */
  /* padding: 30px; */
  width: 100%;
  /* padding: 20px; */
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 950px;
  height: 40vh;
  margin: 0px 20px;

  transition: all 0.2s ease-in;

  :hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 650;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const Nickname = styled.div`
  font-size: 1rem;
`;

export const Img = styled.img`
  width: 400px;
  height: 26vh;
  border-radius: 10px;
  margin-bottom: 13px;
  box-shadow: 2px 2px 5px lightgray;
  object-fit: contain;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;

  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;
export const MoveToWrite = styled.div`
  width: 8vw;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #ffa500;
  border-radius: 50px;
  color: white;

  @media ${breakPoints.mobile} {
    width: 15vw;
    word-wrap: break-word;
  }
`;

export const ButtonWrap = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;
`;

export const Prev = styled(LeftCircleOutlined)`
  font-size: 2rem;
  cursor: pointer;
`;

export const Next = styled(RightCircleOutlined)`
  font-size: 2rem;
  cursor: pointer;
  margin-left: 20px;
`;
