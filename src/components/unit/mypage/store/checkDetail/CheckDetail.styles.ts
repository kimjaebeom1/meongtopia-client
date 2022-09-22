import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5rem 0;

  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const TitleWrapper = styled.div`
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & div {
    color: #999;
    font-weight: 500;
  }
`;

export const Title = styled.h2`
  margin: 0;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid orange;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 1rem;
  & div {
    margin: 0.5rem 0;
  }

  & span {
    color: #777;
  }
`;

export const Btn = styled.button`
  padding: 0 1rem;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 10px;
  line-height: 2rem;
  height: 2rem;
  cursor: pointer;
  :active {
    background-color: #f4840b;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;
