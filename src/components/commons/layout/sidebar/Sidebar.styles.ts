import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiLogOut, BiWon } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

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
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const profileImg = styled(BsPersonCircle)`
  font-size: 8rem;
  color: #999;
  margin-bottom: 1rem;
  cursor: pointer;
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
  background-color: orange;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 0.3rem 0.5rem 0.2rem 0.5rem;

  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;

export const PointIcon = styled(BiWon)`
  font-size: 1.2rem;
  color: orange;
  margin-right: 0.5rem;
`;

export const UpdateIcon = styled(RiUserSettingsLine)`
  font-size: 1.3rem;
  color: orange;
  margin-right: 0.5rem;
`;

export const LogoutIcon = styled(BiLogOut)`
  font-size: 1.3rem;
  color: orange;
  margin-right: 0.5rem;
`;

export const ClickSpan = styled.span`
  cursor: pointer;

  :hover {
    color: orange;
  }
`;

export const Delete = styled(TiDelete)`
  font-size: 2rem;
  color: #cacaca;
  position: absolute;
  margin-top: -4.6rem;
  margin-left: -1rem;
  cursor: pointer;
  :hover {
    color: orange;
  }
`;
