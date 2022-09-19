import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface isActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobile} {
    padding: 5rem 0;
  }
`;

export const Ad = styled.img`
  width: 420px;
  height: 420px;
  display: flex;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginPartWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* margin: 0px auto; */
  width: 1024px;
  padding: 0rem 2rem;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ElWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  /* margin-top: 30px; */
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  color: #808080;
  margin-bottom: 30px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0px 1rem;
  outline: none;
  border: 1px solid #cacaca;
  border-radius: 10px;
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
  background-color: #999;
  border-radius: 50px;
  margin: 1rem 0;
  border: none;

  cursor: pointer;
  :hover {
    background-color: #f4840b;
  }

  background-color: ${(props: isActiveProps) =>
    props.isActive ? "orange" : "none"};
`;

export const SignUp = styled.div`
  /* width: 18rem; */
  font-size: 1rem;
  margin-top: 1rem;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const MoveToSignUp = styled.div`
  font-size: 1rem;
  margin-left: 1rem;
  color: black;
  cursor: pointer;

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
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const SocialLoginNaver = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const SocialLoginKakao = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-image: url("/images/kakao.png");
  cursor: pointer;
`;

export const Line = styled.div`
  width: 3px;
  height: 45vh;
  border-left: 1px solid lightgray;
  margin: 0px 30px;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
