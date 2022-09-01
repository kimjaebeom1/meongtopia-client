import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
`;

export const ListSelectWrapper = styled.div`
  width: 75rem;
  font-size: 20px;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    justify-content: center;
    flex-direction: row;
    margin: 0;
    width: 100%;
  }
`;

export const LocationSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9em;
    height: 3.5em;
    background-color: white;
    margin-left: 3rem;
    border-radius: 28px;
    border: 1.5px solid rgb(223, 227, 234);
    box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px;
    font-size: 15px;
    font-weight: 600;
    color: rgb(187, 193, 204);
    cursor: pointer;

    @media ${breakPoints.mobile} {
      align-items: center;
      margin: 0;
      width: 100%;
    }
  }
`;

export const ConditionSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2em;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9em;
    height: 3.5em;
    background-color: white;
    margin-left: 3rem;
    border-radius: 28px;
    border: 1.5px solid rgb(223, 227, 234);
    box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px;
    font-size: 15px;
    font-weight: 600;
    color: rgb(187, 193, 204);
    cursor: pointer;
  }
`;

export const SearchList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
`;

export const SearchBar = styled.input`
  margin-left: 3rem;
  width: 20rem;
  height: 3.5rem;
  border: 1px solid rgb(235, 235, 235);
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 5px 0px;
  border-radius: 28px;
`;

export const CafeListWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  width: 75rem;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 40%;
`;

export const CafeList = styled.div`
  flex-direction: column;
  padding-top: 4.5em;
  width: 60%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 0em;
  }
`;
