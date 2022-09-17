import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: black;
`;

export const ProcedureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Procedure01 = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: ${(props) => (!props.next ? "flex" : "none")};
  }
`;
export const Procedure02 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.mobile} {
    display: ${(props) => (props.next ? "flex" : "none")};
    width: 100%;
  }
`;

export const ProcedureUnderBar01 = styled.div`
  border-bottom: 4px solid #c4c4c4;
  width: 50%;
  border-color: ${(props) => (!props.next ? "orange" : "none")};

  @media ${breakPoints.mobile} {
    width: 100%;
    border-color: ${(props) => (!props.next ? "orange" : "orange")};
  }
`;
export const ProcedureUnderBar02 = styled.div`
  width: 50%;
  border-bottom: 4px solid #c4c4c4;
  border-color: ${(props) => (props.next ? "#f4840b" : "none")};

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ProcedureUnderBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CafeNameInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  padding-left: 1em;
`;

export const ErrorTag = styled.div`
  color: red;
  font-size: 16px;
`;

export const Tag = styled.div`
  margin-top: 2em;
  font-size: 1.4rem;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  @media ${breakPoints.mobile} {
    display: none;
    height: 80px;
    justify-content: space-evenly;
    text-align: center;
  }
`;

export const MobileUploadWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    margin-top: 1rem;
    display: flex;
  }
`;

export const CafeNumberInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1rem;
  border: 1px solid #808080;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const TimeAndFeeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 30px;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-right: 0px;
  }
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

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
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    text-align: center;
    padding-left: 0;
  }
`;

export const CloseTimeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  padding-left: 1em;

  @media ${breakPoints.mobile} {
    text-align: center;
    padding-left: 0;
  }
`;

export const CafeFeeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  margin-top: 1rem;
  padding-left: 1em;
`;

export const ToastWrapper = styled.div`
  margin-top: 1rem;
  text-align: start;
`;

export const FeeWrapper = styled.div`
  width: 40%;
  margin-left: 50px;

  @media ${breakPoints.mobile} {
    width: 100%;
    margin-left: 0px;
  }
`;

export const TimeAndFeeErrorWrapper = styled.div`
  display: flex;

  & > div {
    margin-right: 18px;
    width: 30%;
  }
`;

export const AddressInput = styled.input`
  width: 80%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1rem;
  padding-left: 1em;
  border: 1px solid #808080;
`;

export const AddressBtn = styled.button`
  width: 20%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1rem;
  border: 1px solid #808080;
  margin-left: 2rem;
  cursor: pointer;
  text-align: center;
`;

export const AddressDetailInput = styled.input`
  width: 100%;
  padding-left: 1em;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1rem;
  border: 1px solid #808080;
`;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const AddressModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 1.7em;
`;

export const LocationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 1rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
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
  background-color: ${(props: any) =>
    // !props.formState.isValid ||
    !props.fileUrls.join("") ||
    !props.description ||
    props.description === "<p><br></p>" ||
    !props.locationActive ||
    !props.conditionActive.join()
      ? "#d9d9d9"
      : "orange"};
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
  background-color: ${(props: any) =>
    !props.petArr.join() || !props.bigDog || !props.smallDog
      ? "#d9d9d9"
      : "orange"};
  color: white;
  font-size: 24px;
  font-weight: 400;
  margin-left: 10px;
  cursor: pointer;
  color: white;
`;

export const StoreTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: 8em;
  height: 2em;
  background-color: ${(props) => (props.isActive ? "orange" : "#fff")};
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.isActive ? "#f4840b" : "rgb(223, 227, 234)")};
  /* box-shadow: rgb(0 0 0 / 3%) 0px 2px 3px 0px; */
  color: ${(props) => (props.isActive ? "white" : "#999")};
  cursor: pointer;
`;
