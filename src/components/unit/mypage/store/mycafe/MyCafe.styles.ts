import styled from "@emotion/styled";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;

  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;

  padding: 0 0.8rem;
  line-height: 3rem;
  height: 3rem;

  cursor: pointer;

  :hover {
    background-color: #f4840b;
    color: #fff;
  }
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

export const Img = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const UserList = styled.ul`
  width: 65%;
  padding: 1rem 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin: 0;
`;

export const RatingWrapperMobile = styled.span`
  display: none;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    display: flex;
    align-items: flex-end;
  }
`;

export const ContentsText = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: normal;
  font-weight: 700;
  margin: 0.5rem 0;
  & span {
    font-size: 1rem;
    line-height: normal;

    & p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;

export const RatingWrapper = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SelectTag = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: orange;
`;

export const Horizon = styled.div`
  border-bottom: 1px solid #cacaca;
  margin: 1rem 0;
`;

export const Heart = styled(AiFillHeart)`
  font-size: 1.2rem;
  color: orangered;
  margin-right: 0.5rem;
`;

export const BtnWrapper = styled.div`
  width: 6rem;
  font-size: 1.4rem;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const BtnDetail = styled.div`
  height: 50%;
  color: #fff;
  background-color: orange;
  border-radius: 0 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #f4840b;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const BtnDelete = styled.div`
  height: 50%;
  color: #fff;
  background-color: #cacaca;
  border-radius: 0 0 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #999;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const AddBtn = styled.button`
  background-color: orange;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  padding: 0 1rem;
  line-height: 3rem;
  height: 3rem;

  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;

export const PickWrapper = styled.span`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PickWrapperMobile = styled.span`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    align-items: flex-start;
  }
`;

export const Star = styled(AiFillStar)`
  font-size: 1.4rem;
  color: #f5cf1f;
`;
