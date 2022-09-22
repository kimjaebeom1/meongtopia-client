import styled from "@emotion/styled";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { breakPoints } from "../../../../commons/styles/media";

interface ICommunityStyleProps {
  isActive?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;

export const ContainerTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 80px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 5rem 0;
  display: grid;
  /* place-items: center; */
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 350px; */
  height: 50vh;
  transition: all 0.2s ease-in;
  box-shadow: 2px 2px 5px lightgray;
  border-radius: 10px;
  :hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 650;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const Contents = styled.div`
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 0px 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 29vh;
  border-radius: 10px;
  margin-bottom: 13px;
  box-shadow: 2px 2px 5px lightgray;
  object-fit: cover;
`;

export const Wrap = styled.div`
  width: 1200px;
  height: 20vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 10vh;
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
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 6vh;
    line-height: 6vh;
    font-size: 1rem;
    word-wrap: break-word;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    padding: 0px 20px;
    justify-content: center;
    width: 100%;
    line-height: 17px;
  }
`;

export const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;

  @media ${breakPoints.mobile} {
    word-wrap: break-word;
    width: 100%;
    margin: 0px 10px;
  }
`;

export const PageNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 3vw;
  height: 5vh;
  line-height: 5vh;
  margin: 0px 20px;
  border-radius: 50px;
  color: ${(props: ICommunityStyleProps) =>
    props.isActive ? "white" : "none"};
  background-color: ${(props: ICommunityStyleProps) =>
    props.isActive ? "#ffa500" : "none"};
  cursor: pointer;
  @media ${breakPoints.mobile} {
    margin: 0px;
    width: 7vw;
    height: 5vh;
  }
`;

export const Prev = styled(LeftCircleOutlined)`
  font-size: 2rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const Next = styled(RightCircleOutlined)`
  font-size: 2rem;

  cursor: pointer;
  /* margin-left: 20px; */
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;
