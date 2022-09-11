import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.header`
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 10px 10px -15px black;
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

  :hover {
    animation: up-scale 0.5s 2;
  }

  @keyframes up-scale {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(0.8);
    }
  }

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

export const LoginContainer = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Logout = styled.li`
  font-size: 18px;
  margin-left: 1rem;
  color: #cacaca;
  cursor: pointer;
  :hover {
    color: #ffe812;
  }
`;
