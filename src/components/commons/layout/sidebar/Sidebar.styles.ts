import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiLogOut, BiWon } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.aside`
  width: 25rem;
  box-shadow: 10px 0px 10px -15px black;
  margin-right: 5rem;
  padding: 6rem 0;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0;
    padding: 2rem 2rem;
    box-shadow: 0px 10px 10px -15px black;
  }
`;

export const InfoContainer = styled.ul`
  margin-bottom: 5rem;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const List = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    margin-right: 2rem;
  }

  & img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    cursor: pointer;

    @media ${breakPoints.mobile} {
      width: 40px;
      height: 40px;
      margin-right: -1rem;
    }
  }
`;

export const profileImg = styled(BsPersonCircle)`
  font-size: 8rem;
  color: #999;
  margin-bottom: 1rem;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 3rem;
    margin-right: -1rem;
  }
`;

export const InfoText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const MenuContainer = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
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

  @media ${breakPoints.mobile} {
    height: 100%;
    padding: 0.2rem 0.5rem 0 0.5rem;
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

  @media ${breakPoints.mobile} {
    margin-top: -1.5rem;
    font-size: 1.5rem;
  }
`;

export const InfoWrapper = styled.div`
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
