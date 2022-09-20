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
`;

export const ListTable = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
`;

export const Head = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const HeadName = styled.div`
  width: 25%;
  display: flex;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const DataRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const CafeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  padding-left: 1rem;
`;

export const MembersRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
`;

export const DataName = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  :hover {
    color: orange;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
    padding-right: 1rem;
  }
`;

export const DataColumn = styled.div`
  width: 50%;
`;

export const SumColumn = styled.div`
  width: 25%;
  padding-right: 0.5rem;

  @media ${breakPoints.mobile} {
    padding: 0;
  }
`;

export const Data = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }
`;

export const DateBtn = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;
