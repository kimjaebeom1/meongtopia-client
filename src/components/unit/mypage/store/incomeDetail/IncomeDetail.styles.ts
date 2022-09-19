import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;
  border: 1px solid orange;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${breakPoints.mobile} {
    margin: 3rem 0rem;
    border: none;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Chart = styled.div`
  width: 770px;

  @media ${breakPoints.mobile} {
    margin-top: 1rem;
    width: 94vw;
  }
`;
