import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { FaSearch, FaStore } from "react-icons/fa";

interface IsActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.nav`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: #fff;
    border-top: 1px solid #f1f1f1;
    z-index: aaa;
    padding-bottom: 4px;
  }
`;

export const Menu = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon1 = styled(AiFillHome)`
  font-size: 25px;
  margin-bottom: 2px;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;

export const Icon2 = styled(FaSearch)`
  font-size: 23px;
  margin-bottom: 3px;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;

export const Icon3 = styled(MdEditNote)`
  font-size: 32px;
  margin-left: 5px;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;

export const Icon4 = styled(BsFillPersonFill)`
  font-size: 28px;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;

export const Icon5 = styled(FaStore)`
  font-size: 28px;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;

export const Text = styled.span`
  font-size: 1rem;
  color: ${(props: IsActiveProps) => (props.isActive ? "orange" : "#aaa")};
`;
