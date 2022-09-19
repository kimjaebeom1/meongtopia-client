import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto;
`;

export const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  width: 768px;
  height: 160vh;
  margin: 0px auto;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 170vh;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    width: 90%;
  }
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
  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
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
  width: 70%;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const IdPwWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
  /* border: 1px solid black; */
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const InputElWrap = styled.div`
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 10px;
  margin-right: 10px;
  padding: 0px 10px;
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 2.5rem;
  outline: none;
  border: none;
  margin-top: 3px;
`;

export const NickNameInput = styled.input`
  width: 90%;
  height: 2.5rem;
  outline: none;
  border: none;
  margin-top: 3px;
  margin-left: 10px;

  @media ${breakPoints.mobile} {
    margin-left: 10px;
    margin-top: -1px;
  }
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
  border-radius: 50px;
  background-color: ${(props) => (props.isActive ? "#ffa500" : "gray")};
  margin: 0px 10px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 25%;
    height: 60%;
  }
`;

// ====== //

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -20px;
  margin-bottom: 60px;
`;

export const PhoneNumWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const PhoneInputWrap = styled.div`
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 10px;
  margin-right: 10px;
  padding: 0px 10px;
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    height: 2.8rem;
  }
`;

export const PhoneNumInput = styled.input`
  width: 100%;
  height: 2.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 3px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    height: 2.5em;
  }
`;

export const NumBtn = styled.div`
  width: 10rem;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.isActivePhone ? "#ffa500" : "gray")};
  color: white;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 7.3rem;
    height: 40px;
  }
`;

// ======================================================== //

export const NumWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  height: 2.812rem;
  border-radius: 10px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const NumInput = styled.input`
  width: 90%;
  /* height: 2.5rem; */
  padding: 0px 10px;
  border: none;
  outline: none;
`;

export const Timer = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin: 0px 10px;
  font-size: 0.8rem;

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const NumBtn2 = styled.div`
  width: 10rem;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => (props.isActiveNum ? "#ffa500" : "gray")};
  color: white;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 7rem;
    height: 40px;
  }
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
  align-items: center;
  margin-bottom: 30px;
  border: 1px solid #c8c8c8;
`;

export const AgreeChkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8vh;
  padding: 10px 50px;

  @media ${breakPoints.mobile} {
    padding: 10px;
    width: 100%;
    height: 6vh;
  }
`;

export const AgreeContents1 = styled.div`
  font-size: 0.8rem;
  color: red;
  width: 20%;
`;

export const AgreeContents2 = styled.div`
  font-size: 0.8rem;
  color: gray;
  width: 60%;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
    width: 50%;
  }
`;

export const AgreeContents3 = styled.div`
  font-size: 0.7rem;
  color: gray;
  width: 9%;
  margin-right: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
    width: 12%;
  }
`;

export const SignUpBtn = styled.button`
  width: 15rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50px;
  background-color: orange;
  color: white;
  text-align: center;
  margin: 40px 0px;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid lightgray;
`;
