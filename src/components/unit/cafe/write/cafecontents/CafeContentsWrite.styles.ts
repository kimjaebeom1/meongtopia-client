import styled from "@emotion/styled";
import Button from "antd/lib/radio/radioButton";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;

export const CafeNameInput = styled.input`
  margin-top: 1.7em;
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
`;

export const Tag = styled.div`
  margin-top: 2em;
  font-size: 24px;
  font-weight: 700;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.7em;
`;

export const CafeMenuInput = styled.input`
  width: 100%;
  height: 9.6em;
  border-radius: 5px;
  margin-top: 1.7em;
  border: 1px solid #808080;
`;

export const CafeNumberInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  border: 1px solid #808080;
`;

export const TimeAndFeeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 30px;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.7em;

  & > div {
    width: 2.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin: 0px 30px;
  }
`;

export const StartTimeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
`;

export const CloseTimeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
`;

export const CafeFeeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  margin-top: 1.7em;
`;

export const FeeWrapper = styled.div`
  width: 40%;
  margin-left: 50px;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  padding-left: 1em;
  border: 1px solid #808080;
`;

export const AddressDetailInput = styled.input`
  width: 100%;
  padding-left: 1em;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  border: 1px solid #808080;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.7em;
`;

export const PrevButton = styled.button`
  width: 7em;
  height: 2.3em;
  border-radius: 10px;
  border: none;
  background-color: #808080;
  color: white;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 7em;
  height: 2.3em;
  border-radius: 10px;
  border: none;
  background-color: #d9d9d9;
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-left: 10px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 7em;
  height: 2.3em;
  border-radius: 10px;
  border: none;
  background-color: #d9d9d9;
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-left: 10px;
  cursor: pointer;
`;

// dog profile

export const DogProfileWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
  flex-direction: row;
  margin-top: 1.7em;
`;

export const WithDogBtn = styled.button`
  margin-right: 20px;

  background-color: ${(props) => (props.withDog ? "none" : "gold")};
  border: none;
`;

export const YardBtn = styled.button`
  margin-right: 20px;
  background-color: ${(props) => (props.yard ? "none" : "gold")};
  border: none;
`;

export const LargeDogBtn = styled.button`
  background-color: ${(props) => (props.largeDog ? "none" : "gold")};
  border: none;
`;

// export const KeywordButton = styled(Button)``;
