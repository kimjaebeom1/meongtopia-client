import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiLogOut, BiWon } from "react-icons/bi";

export const Wrapper = styled.aside`
  width: 25rem;
  box-shadow: 10px 0px 10px -15px black;
  margin-right: 5rem;
  padding: 6rem 0;
`;

export const InfoContainer = styled.ul`
  margin-bottom: 5rem;
`;

export const List = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const profileImg = styled(BsPersonCircle)`
  font-size: 5rem;
  color: #999;
`;

export const InfoText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const MenuContainer = styled.ul`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Charge = styled.button`
  padding: 0.2rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #f5cf1f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PointIcon = styled(BiWon)`
  font-size: 1.2rem;
  color: #f5cf1f;
  margin-right: 0.5rem;
`;

export const UpdateIcon = styled(RiUserSettingsLine)`
  font-size: 1.3rem;
  color: #f5cf1f;
  margin-right: 0.5rem;
`;

export const LogoutIcon = styled(BiLogOut)`
  font-size: 1.3rem;
  color: #f5cf1f;
  margin-right: 0.5rem;
`;

export const ClickSpan = styled.span`
  cursor: pointer;

  :hover {
    color: #f5cf1f;
  }
`;
