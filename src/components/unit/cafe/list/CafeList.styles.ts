import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IIsActiveProps } from "./CafeList.types";

// 검색 컴포넌트
export const SearchContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 10px 10px -15px black;
  padding: 3rem 0 2rem 0;
`;

export const SearchWrapper = styled.div`
  width: 1200px;
  /* @media ${breakPoints.mobile} {
  } */
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const SearchList = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  } */
`;

export const TagsWrapper = styled.div`
  display: flex;
  margin-left: 3.5rem;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: 8em;
  height: 2em;
  background-color: ${(props: IIsActiveProps) =>
    props.isActive ? "#f5cf1f" : "#fff"};
  border-radius: 30px;
  border: 1px solid
    ${(props: IIsActiveProps) =>
      props.isActive ? "#f5cf1f" : "rgb(223, 227, 234)"};
  /* box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px; */
  font-weight: 600;
  color: ${(props: IIsActiveProps) => (props.isActive ? "#fff" : "#cacaca")};
  cursor: pointer;

  /* @media ${breakPoints.mobile} {
    width: 5.2em;
    margin-left: 1em;
  } */
`;

export const SearchBar = styled.input`
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.5rem;
  margin-left: 2rem;
  border: 1px solid rgb(235, 235, 235);
  /* box-shadow: rgb(0 0 0 / 5%) 0px 0px 5px 0px; */
  border-radius: 30px;
`;

// 카페 리스트
export const ListContainer = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
`;

export const ListWrapper = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const CafeListWrapper = styled.div`
  width: 100%;
  height: 16rem;
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 8px;
  /* box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px; */

  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
  } */
`;

export const SliderWrapper = styled.div`
  width: 25rem;
  height: 100%;
  padding: 0.2rem;
  /* @media ${breakPoints.mobile} {
    width: 100%;
  } */
`;

export const CafeList = styled.div`
  flex-direction: column;
  padding: 1rem 0 1rem 2rem;

  /* @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 0em;
  } */
`;

export const NameTag = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const AddressTag = styled.div`
  margin-top: 1em;
`;

export const SelectTag = styled.div`
  margin-top: 1em;
  font-weight: 700;
  color: brown;
`;

export const RatingTag = styled.div`
  margin-top: 1em;
`;
