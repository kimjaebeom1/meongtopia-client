import styled from "@emotion/styled";
import { breakPoints } from "../../commons/styles/media";

export const Wrapper = styled.div`
  /* width: 90%; */
  height: 968px;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  /* overflow-y: hidden; */
`;

export const Image = styled.img`
  width: 100%;
  height: 968px;
  background-color: lightblue;

  @media ${breakPoints.mobile} {
    background-color: transparent;
    width: 0%;
  }
`;

export const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  @media ${breakPoints.mobile} {
    z-index: 999;
    width: 100%;
  }
`;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  /* height: 55%; */
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0px 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-top: 5px;
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const PhoneNum = styled.input`
  width: 100%;
  height: 3rem;
  margin-right: 10px;
  padding: 0px 10px;
`;
export const NumBtn = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background-color: green;
  color: white;
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
`;

export const SignUpBtn = styled.div`
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50px;
  background-color: green;
  color: white;
  text-align: center;
  margin-top: 10px;
`;
