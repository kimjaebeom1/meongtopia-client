import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1280px;
  height: 100%;
  margin: 50px auto;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(3, 370px);
  padding: 80px;
`;

export const Boxes = styled.div``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 650;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const Nickname = styled.div`
  font-size: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 26vh;
  border-radius: 10px;
  margin-bottom: 13px;
  box-shadow: 2px 2px 5px lightgray;
  object-fit: contain;
`;
