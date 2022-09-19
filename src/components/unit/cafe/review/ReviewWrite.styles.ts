import styled from "@emotion/styled";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { BsPersonCircle } from "react-icons/bs";
import { breakPoints } from "../../../../commons/styles/media";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 1rem;

  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  padding-top: 1rem;
  margin-bottom: 1.875rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Date = styled.h4`
  margin: 0;
  color: #cacaca;
  font-size: 14px;
  font-weight: 500;
`;

export const Contents = styled.p`
  display: block;
  width: 60%;
  height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  padding-top: 0.3rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const More = styled.div`
  font-size: 1rem;
  text-decoration: underline;
  text-underline-position: under;

  cursor: pointer;
  :hover {
    color: gold;
  }
`;

// 작성페이지
export const WriteWrapper = styled.div`
  width: 35%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const CommentsTag = styled.div`
  font-size: 1.5rem;
`;

export const CommentsBox = styled.textarea`
  padding-top: 0.7rem;
  padding-left: 0.7rem;
  width: 100%;
  height: 9.188rem;
  border-radius: 5px;
  font-size: 0.938rem;
  border: 2px solid #e9e9e9;
`;

export const CommentsBtn = styled.button`
  margin-top: 0.688rem;
  border: none;
  width: 7.25rem;
  font-weight: 500;
  border-radius: 5px;
  font-size: 1.25rem;
  background: orange;
  color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Star = styled(Rate)`
  margin-right: 1rem;
`;
