import SignupPresenterPage from "./Signup.user.presenter";
// import { CREATE_USER } from "./Signup.user.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function SignupContainerPage() {
  // const [createUser] = useMutation(CREATE_USER);

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

  // const onClickCreateUser = async () => {
  //   const result = await createUser({
  //     variables: {
  //       createUserInput: {
  //         name,
  //         nickname,
  //         email,
  //         password,
  //         phone,
  //       },
  //     },
  //   });
  // };

  return;

  <SignupPresenterPage />;
}
