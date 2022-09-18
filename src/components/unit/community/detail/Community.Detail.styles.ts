import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 768px;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  border: 1px solid red;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 50vw;
  height: 60vh;
  object-fit: cover;
  box-shadow: 2.5px 3px 9px 1px lightgray;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border: 1px solid black;
`;

export const Contents = styled.div`
  font-size: 1.2rem;
  border: 1px solid blue;
  height: 70%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin-top: 60px;
`;

export const Button = styled.div`
  width: 8rem;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: #ffa500;
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 5px;
  padding-left: 1.3%;
`;
