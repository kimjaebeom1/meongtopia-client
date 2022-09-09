import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  border: 1px solid #f5cf1f;
  border-radius: 1rem;
  margin: 5rem 0;
  padding: 2rem;
`;

export const List = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #cacaca;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-size: 1rem;
`;

export const Data = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;
`;

export const UpdateBtn = styled.button`
  margin-left: 1rem;
  padding: 0 0.5rem;
  background-color: rgba(212, 216, 229, 0.25);
  color: #7b8994;
  border: 1px solid rgba(212, 216, 229, 0.5);
  border-radius: 4px;
  cursor: pointer;
`;

export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const UpdateTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 15rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  background-color: rgba(212, 216, 229, 0.25);
  border: 1px solid rgba(212, 216, 229, 0.5);
  border-radius: 4px;
`;

export const UpdateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  font-size: 0.9rem;
  color: red;
  margin-top: 1rem;
`;
