import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  /* width: 90%; */
  /* height: 968px; */
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  /* overflow-y: hidden; */
`;

export const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  /* justify-content: center; */
  /* width: 35%; */
  width: 768px;
  margin: 0px auto;

  @media ${breakPoints.mobile} {
    z-index: 999;
    width: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 66%;
  margin-bottom: 20px;
`;

export const UserWrap = styled.div`
  width: 50%;
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
  margin: 0px 5px;
  margin-bottom: 20px;
  border-radius: 50px;
`;

export const OwnerWrap = styled.div`
  width: 50%;
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray; // 나중에 삼항연산자로 색 입히기
  margin: 0px 5px;
  margin-bottom: 20px;
  border-radius: 50px;
`;

export const Ment1 = styled.div`
  font-size: 1.3rem;
  color: #ffffff;
  cursor: pointer;
`;

export const Ment2 = styled.div`
  font-size: 9px;
  color: #ffffff;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 650;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 300px; */
  width: 65%;
  /* border: 4px solid red; */
  /* height: 55%; */
`;

export const IdPwWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
  /* border: 1px solid black; */
`;

export const NickNameWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 2px;
  margin-right: 10px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  /* background-color: red; */
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin-top: 3px;
`;

export const InputElWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 2px;
  margin-right: 10px;
`;

export const NickNameInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0px 10px;
  border: none;
  outline: none; ;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const CheckBtn = styled.div`
  width: 5.3rem;
  height: 1.5rem;
  color: white;
  font-size: 12px;
  font-weight: 450;
  line-height: 1.5rem;
  text-align: center;
  background-color: ${(props) => (props.isActive ? "orange" : "gray")};
  margin: 0px 10px;
  cursor: pointer;
`;

export const Timer = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin: 0px 10px;
  font-size: 0.8rem;
  /* visibility: hidden; */
`;

export const AgreeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AgreeWrap2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  border: 1px solid #c8c8c8;
`;

export const AgreeChkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
`;

export const AgreeContents1 = styled.div`
  font-size: 12px;
  color: red;
  width: 20%;
`;
export const AgreeContents2 = styled.div`
  font-size: 12px;
  color: gray;
  width: 60%;
`;
export const AgreeContents3 = styled.div`
  font-size: 12px;
  color: gray;
  width: 12%;
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -20px;
  margin-bottom: 20px;
  /* background-color: blue; */
`;

export const PhoneNumWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const PhoneNum = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0px 10px;
`;
export const NumBtn = styled.div`
  width: 10rem;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.isActivePhone ? "burlywood" : "gray")};
  color: white;
  cursor: pointer;
`;

export const NumBtn2 = styled.div`
  width: 10rem;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.isActiveNum ? "burlywood" : "gray")};
  color: white;
  cursor: pointer;
`;

export const NumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: white;
`;

export const Number = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  padding: 0px 10px;
  color: black;
`;

export const SignUpBtn = styled.div`
  width: 15rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50px;
  background-color: orange;
  color: white;
  text-align: center;
  margin: 40px 0px;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid lightgray;
`;
