import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 900px;
  height: 100vh;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Img = styled.img`
  width: 50%;
  height: 60vh;
  /* object-fit: cover; */
  box-shadow: 2.5px 3px 9px 1px lightgray;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 2px;
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;
  box-shadow: 2.5px 3px 9px 1px lightgray;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: 90%;
  height: 2px;
  margin: 0px auto;
`;
export const Contents = styled.div`
  font-size: 1.2rem;
  height: 70%;
  padding: 20px;
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
  cursor: pointer;
`;
