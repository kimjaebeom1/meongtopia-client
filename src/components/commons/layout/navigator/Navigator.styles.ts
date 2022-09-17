import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaSearch, FaStore } from "react-icons/fa";

export const Wrapper = styled.nav`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: #fff;
    border-top: 1px solid #f1f1f1;
    z-index: 999;
  }
`;

export const Menu = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon1 = styled(AiFillHome)`
  font-size: 28px;
  color: orange;
`;

export const Icon2 = styled(FaSearch)`
  font-size: 26px;
  color: orange;
`;

export const Icon3 = styled(MdInsertComment)`
  margin-top: 4px;
  font-size: 30px;
  color: orange;
`;

export const Icon4 = styled(BsFillPersonFill)`
  font-size: 30px;
  color: orange;
`;

export const Icon5 = styled(FaStore)`
  font-size: 30px;
  color: orange;
`;
