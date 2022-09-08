import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN, FETCH_USER } from "./Login.queries";
import { useQuery } from "@apollo/client";

export default function LoginContainerPage() {
  const [login] = useMutation(LOGIN);
  const router = useRouter();
  const client = useApolloClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery(FETCH_USER);

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // const [accessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async () => {
    const result = await login({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.login;
    alert("로그인 되었습니다");
    // console.log(accessToken);
    setAccessToken(accessToken);
    console.log(result.data?.login);

    if (!accessToken) {
      alert("로그인 실패. 다시 시도해주세요!");
      return;
    }
    router.push("/");
  };

  return (
    <LoginPresenterPage
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
