import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.header`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #cacaca;
  display: flex;
  justify-content: center;
  /* @media ${breakPoints.mobile} {
    padding: 1rem;
    font-size: 1rem;
  } */
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  } */
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 80px;
  }
`;

export const MenuContainer = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const DogIcon = styled.img`
  width: 4.5rem;
  height: 3rem;
  object-fit: cover;
`;

export const LoginContainer = styled.div`
  display: flex;
`;
