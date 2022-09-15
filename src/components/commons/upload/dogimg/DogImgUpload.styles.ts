import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const DogImage = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  width: 70%;
  height: 279px;
  background: #ebebeb;
  border-radius: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;

  span {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    transition: all 0.5s ease;
  }

  :hover {
    background: orange;
    color: #ffffff;
    img {
      filter: brightness(0) invert(1);
    }
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DogUploadImage = styled.img`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 279px;
  background: #ebebeb;
  border-radius: 1rem;
  transition: all 0.5s ease;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
