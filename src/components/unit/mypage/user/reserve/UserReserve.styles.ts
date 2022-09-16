import styled from "@emotion/styled";
import { AiFillHeart } from "react-icons/ai";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;
`;

export const PageTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 14rem;
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;
`;

export const State = styled.div`
  width: 5rem;
  height: 100%;
  background-color: #f1f1f1;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px 0 0 10px;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 180px;
  height: 100%;
  object-fit: cover;
`;

export const UserList = styled.ul`
  width: 60%;
  padding: 1rem 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0;
`;

export const ContentsText = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: normal;
  font-weight: 600;
  margin: 0.25rem 0;
  & span {
    font-size: 1rem;
    line-height: normal;

    & p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

export const Date = styled.span`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const RatingWrapper = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const SelectTag = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: orange;
`;

export const Horizon = styled.div`
  border-bottom: 1px solid #cacaca;
  margin: 0.5rem 0;
`;

export const DogWrapper = styled.span`
  display: flex;
  align-items: flex-end;
`;

export const Heart = styled(AiFillHeart)`
  font-size: 1.2rem;
  color: orangered;
  margin-right: 0.5rem;
`;

export const Cancel = styled.div`
  width: 6rem;
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 0 10px 10px 0;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;

export const AddBtn = styled.button`
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem 0.3rem 1rem;

  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;
