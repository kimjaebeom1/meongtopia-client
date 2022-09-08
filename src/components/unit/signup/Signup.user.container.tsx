import SignUpPresenterPage from "./Signup.user.presenter";
import {
  CREATE_USER,
  GET_TOKEN,
  CHECK_VALID_TOKEN,
} from "./Signup.user.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
export default function SignUpContainerPage() {
  const [createUser] = useMutation(CREATE_USER);
  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const router = useRouter();

  // 이메일,비밀번호,닉네임,전화번호,인증성공여부,약관동의 선택했는지

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [PhoneError, setPhoneError] = useState("");

  // const initialInputs = { email: "", password: "", nickname: "", phone: "" };

  // const [inputs, setInputs] = useState(initialInputs);
  // const [inputsError, setInputsError] = useState(initialInputs);

  const onChangeName = (event: any) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  };

  const onChangeNickname = (event: any) => {
    setNickname(event.target.value);
    if (event.target.value !== "") {
      setNicknameError("");
    }
  };

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangePhone = (event: any) => {
    setPhone(event.target.value);
    if (event.target.vaule !== "") {
      setPhoneError("");
    }
  };

  const onChangeCheckNum = (event) => {
    setCheckNum(event.target.value);
  };

  const onClickCreateUser = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }

    if (!name) {
      setNameError("이름을 입력해주세요");
    }

    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요");
    }

    // if (!phone) {
    //   setPhoneError("핸드폰번호를 입력해주세요");
    // }

    if (email && password && name && nickname) {
      try {
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
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  const onClickMoveToOwner = () => {
    router.push("/signup/owner");
  };

  const onClickMoveToUser = () => {
    router.push("/signup");
  };

  const onClickGetToken = async () => {
    console.log("클릭");
    const result = await getToken({
      variables: {
        phone: String(phone),
      },
    });
    console.log("성공이올시다");
    console.log(result);
  };

  const onClickCheckValidToken = async () => {
    console.log("인증성공?");
    const result = await checkValidToken({
      variables: {
        phone: String(phone),
        token: String(checkNum),
      },
    });
    console.log(result);
    console.log("인증성공!");
  };
  // 원희님 조용히 해주세요
  // 다 지워버릴꺼야

  return (
    <SignUpPresenterPage
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeNickname={onChangeNickname}
      onChangePassword={onChangePassword}
      onChangePhone={onChangePhone}
      onChangeCheckNum={onChangeCheckNum}
      onClickCreateUser={onClickCreateUser}
      onClickMoveToOwner={onClickMoveToOwner}
      onClickMoveToUser={onClickMoveToUser}
      onClickGetToken={onClickGetToken}
      onClickCheckValidToken={onClickCheckValidToken}
      emailError={emailError}
      passwordError={passwordError}
      nameError={nameError}
      nicknameError={nicknameError}
      // phoneError={PhoneError}
    />
  );
}
