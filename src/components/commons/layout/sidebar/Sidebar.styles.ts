import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";

export const Wrapper = styled.aside`
  width: 20%;
  border-right: 1px solid #f5cf1f;
  margin: 2rem 5rem 2rem 0;
  padding-top: 6rem;
`;

export const InfoContainer = styled.ul`
  margin-bottom: 5rem;
`;

export const List = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const profileImg = styled(BsPersonCircle)`
  font-size: 5rem;
  color: #999;
`;

export const Cost = styled.span``;

export const MenuContainer = styled.ul`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
