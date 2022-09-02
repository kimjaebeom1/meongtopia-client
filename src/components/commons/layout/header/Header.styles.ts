import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobile} {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  width: 4rem;
  height: 3rem;
`;

export const MenuContainer = styled.div`
  display: flex;
`;

export const Signin = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #f5cf1f;
  font-weight: 700;
`;

export const Signup = styled.div`
  font-size: 1.5rem;
  color: #f5cf1f;
  font-weight: 700;
`;
