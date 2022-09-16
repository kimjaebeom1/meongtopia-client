import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  border: 1px solid orange;
  border-radius: 1rem;
  margin: 5rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 1rem 0;
`;

export const List = styled.div`
  width: 100%;
  border: 1px solid #cacaca;
  border-radius: 10px;
  font-size: 1.1rem;
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: orange;
  }
`;

export const Btn = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: orange;
  color: #fff;
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;

  :hover {
    background-color: #f4840b;
  }
`;
