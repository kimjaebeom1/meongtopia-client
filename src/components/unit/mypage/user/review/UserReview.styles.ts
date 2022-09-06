import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";

export const Wrapper = styled.div`
  width: 500px;
  margin: 60px auto;
`;

export const SortWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const SortSelect = styled.select`
  border: none;
  color: #999;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
  border: 1px solid #cacaca;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 30px;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileIcon = styled(BsPersonCircle)`
  font-size: 40px;
  margin-right: 20px;
  color: #808080;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 400px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const More = styled.div`
  font-size: 16px;
  text-decoration: underline;
  text-underline-position: under;

  cursor: pointer;
  :hover {
    color: gold;
  }
`;
