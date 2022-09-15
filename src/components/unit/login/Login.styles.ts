import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  /* height: 968px; */
  width: 100%;
  margin: 0px auto;
  padding: 50px 0px;
  /* display: flex; */
  /* flex-direction: row; */
  /* overflow-y: hidden; */
`;

export const Ad = styled.img`
  width: 300px;
  height: 300px;
  display: flex;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginPartWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0px auto;
  width: 768px;
  padding: 0rem 3rem;
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
  height: 45%;
  width: 300px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const SubTitle = styled.div`
  font-size: 11px;
  color: #808080;
  margin-bottom: 30px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;

  /* border: 1px solid black; */
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0px 20px;
  outline: none;
  border: none;
  /* border: none; */
  /* border: none; */
  /* border-bottom: 1px solid gray; */
`;

export const InputBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(118, 118, 118);
  width: 100%;
  border-radius: 2px;
`;

export const Error = styled.div`
  color: red;
  font-size: 0.6rem;
  margin-top: 5px;
  /* margin-left: -200px; */
`;

export const LoginBtn = styled.button`
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  text-align: center;

  color: white;
  border-radius: 50px;
  margin-bottom: 10px;
  border: none;

  background-color: ${(props) => (props.isActive ? "#F5CF1F" : "none")};
`;

export const SignUp = styled.div`
  width: 12rem;
  font-size: 0.8rem;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MoveToSignUp = styled.div`
  font-size: 0.8rem;
  color: black;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;

export const SocialLoginWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 14rem;
`;

export const SocialLoginGoogle = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  cursor: pointer;
`;

export const SocialLoginNaver = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  cursor: pointer;
`;

export const SocialLoginKakao = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  background-image: url("/images/kakao.png");
  cursor: pointer;
`;

export const Line = styled.img`
  width: 3px;
  height: 300px;
  border-left: 1px solid lightgray;
  margin: 0px 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
