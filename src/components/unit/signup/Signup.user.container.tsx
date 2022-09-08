import SignUpPresenterPage from "./Signup.user.presenter";
import { CREATE_USER } from "./Signup.user.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUpContainerPage() {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onClickCreateUser = async () => {
    const result = await createUser({
      variables: {
        createUserInput: {
          name,
          nickname,
          email,
          password,
          phone,
        },
      },
    });
    console.log(result.data?.createUser.usedID);
    alert("회원가입 완성");
    router.push("/login");
  };

  const onClickMoveToOwner = () => {
    router.push("/signup/owner");
  };

  const onClickMoveToUser = () => {
    router.push("/signup");
  };

  return (
    <SignUpPresenterPage
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeNickname={onChangeNickname}
      onChangePassword={onChangePassword}
      onChangePhone={onChangePhone}
      onClickCreateUser={onClickCreateUser}
      onClickMoveToOwner={onClickMoveToOwner}
      onClickMoveToUser={onClickMoveToUser}
    />
  );
}
