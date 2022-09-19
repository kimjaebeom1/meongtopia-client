import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN, FETCH_USER } from "./Login.queries";
import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function LoginContainerPage() {
  const [login] = useMutation(LOGIN);

  const router = useRouter();

  const onClickGoogle = () => {
    router.push("https://meongtopiaserver.shop/login/google%22");
  };

  const onClickNaver = () => {
    router.push("https://meongtopiaserver.shop/login/naver%22");
  };

  const onClickKakao = () => {
    router.push("https://meongtopiaserver.shop/login/kakao%22");
  };

  const client = useApolloClient();
  const [isActive, setIsActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery(FETCH_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }

    if (event.target.value && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (email && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onClickLogin = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    try {
      const result = await login({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.login;
      setAccessToken(accessToken);
      setIsActive(true);

      if (!accessToken) {
        alert("로그인 실패. 다시 시도해주세요!");
        return;
      }
      router.push("/home");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginPresenterPage
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      emailError={emailError}
      passwordError={passwordError}
      isActive={isActive}
      onClickNaver={onClickNaver}
      onClickGoogle={onClickGoogle}
      onClickKakao={onClickKakao}
    />
  );
}
