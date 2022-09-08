import styled from "@emotion/styled";
import { Modal, Radio } from "antd";
import dynamic from "next/dynamic";
import DaumPostcodeEmbed from "react-daum-postcode";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const CafeNameInput = styled.input`
  margin-top: 1.7em;
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  padding-left: 1em;
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

export const CafeNumberInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  border: 1px solid #808080;
  padding-left: 1em;
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
  padding-left: 1em;
`;

export const CloseTimeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  padding-left: 1em;
`;

export const CafeFeeInput = styled.input`
  width: 100%;
  height: 3.4em;
  border-radius: 5px;
  border: 1px solid #808080;
  margin-top: 1.7em;
  padding-left: 1em;
`;

export const FeeWrapper = styled.div`
  width: 40%;
  margin-left: 50px;
`;

export const AddressInput = styled.input`
  width: 80%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  padding-left: 1em;
  border: 1px solid #808080;
`;

export const AddressBtn = styled.button`
  width: 20%;
  height: 3.4em;
  border-radius: 5px;
  margin-top: 1.7em;
  border: 1px solid #808080;
  margin-left: 4em;
  cursor: pointer;
  text-align: center;
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

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const AddressModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LocationTagWrapper = styled(Radio.Group)`
  width: 100%;

  label {
    margin-right: 20px;
    width: 10%;

    :hover {
      color: black;
    }
    &.ant-radio-button-wrapper {
      text-align: center;

      &.ant-radio-button-wrapper-checked {
        background-color: #f5cf1f;
        border-color: #f5cf1f;
        background: #f5cf1f;

        :first-child {
          border-right: #f5cf1f;
        }
        :hover {
          background: #f5cf1f;
          border-color: #f5cf1f;
        }
        ::before {
          background: #f5cf1f;
        }
      }
    }
    span {
      &.ant-radio-button-checked {
        background-color: #f5cf1f;
      }
      ::selection {
        background: #f5cf1f;
      }
    }
  }
`;

export const LocationButton1 = styled(Radio.Button)`
  background-color: ${(props) =>
    props.location === "홍대" ? "#F5CF1F" : "none"}; ;
`;

export const LocationButton2 = styled(Radio.Button)`
  background-color: ${(props) =>
    props.location === "강남" ? "#F5CF1F" : "none"}; ;
`;
export const LocationButton3 = styled(Radio.Button)`
  background-color: ${(props) =>
    props.location === "대학로" ? "#F5CF1F" : "none"}; ;
`;
export const LocationButton4 = styled(Radio.Button)`
  background-color: ${(props) =>
    props.location === "건대" ? "#F5CF1F" : "none"}; ;
`;
export const LocationButton5 = styled(Radio.Button)`
  background-color: ${(props) =>
    props.location === "잠실" ? "#F5CF1F" : "none"}; ;
`;
