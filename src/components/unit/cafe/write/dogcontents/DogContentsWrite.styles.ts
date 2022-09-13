import styled from "@emotion/styled";
import { MdOutlineCancel } from "react-icons/md";

export const Wrapper = styled.div``;

export const DogProfileWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Tag = styled.div`
  margin-top: 2em;
  font-size: 24px;
  font-weight: 700;
`;

export const DogCountWrapper = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 1.7em;
`;

export const BigDogCount = styled.input`
  margin-left: 10px;
  margin-right: 20px;
  width: 20%;
`;

export const SmallDogCount = styled.input`
  margin-left: 10px;
  width: 20%;
`;
export const DogName = styled.textarea`
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 1rem;
  max-height: 20%;
  resize: none;
`;

export const DogAge = styled.textarea`
  height: 20%;
  margin-top: 5px;
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 1rem;
  resize: none;
`;

export const DogBreed = styled.textarea`
  margin-top: 5px;
  height: 20%;
  padding-left: 15px;
  background: #ebebeb;
  border: none;
  border-radius: 1rem;
  resize: none;
`;

export const DogDesc = styled.textarea`
  margin-top: 5px;
  padding-left: 15px;
  height: 40%;
  background: #ebebeb;
  border: none;
  border-radius: 1rem;
  resize: none;
`;

export const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 1.7em;
`;

export const WithDogBtn = styled.button`
  margin-right: 20px;
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  background-color: ${(props) => (props.withDog ? "#F5CF1F" : "white")};
`;

export const YardBtn = styled.button`
  margin-right: 20px;
  display: inline-block;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  background-color: ${(props) => (props.yard ? "#F5CF1F" : "white")};
`;

export const LargeDogBtn = styled.button`
  margin-right: 20px;
  display: inline-block;
  height: 32px;
  padding: 0 15px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  background-color: ${(props) => (props.largeDog ? "#F5CF1F" : "white")};
`;

export const AddDogBtn = styled.button`
  margin-top: 1.5em;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 3em;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;

  :hover {
    background: #f5cf1f;
    color: #ffffff;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const DogListWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

export const DogListColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    height: 20%;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const DogListImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 200px;
  background: #ebebeb;
  border-radius: 2rem;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const DeleteBtn = styled(MdOutlineCancel)`
  width: 200px;
`;
