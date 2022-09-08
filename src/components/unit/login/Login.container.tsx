import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginPresenterPage from "./Login.presenter";
import { LOGIN } from "./Login.queries";

export default function LoginContainerPage() {
  const [login] = useMutation(LOGIN);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await login({
      variables: {
        email,
        password,
      },
    });
    alert("로그인 되었습니다");
    console.log(result.data?.login);
    router.push("/");
  };

  return (
    <LoginPresenterPage
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
