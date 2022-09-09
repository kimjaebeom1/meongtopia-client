import SignUpPresenterPage from "./Signup.user.presenter";
import {
  CREATE_USER,
  FETCH_USERS,
  GET_TOKEN,
  CHECK_VALID_TOKEN,
} from "./Signup.user.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { message, Modal } from "antd";
import { checkEmail, checkPassword } from "../../../commons/libraries/utils";

export default function SignUpContainerPage() {
  const [createUser] = useMutation(CREATE_USER);
  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const { data } = useQuery(FETCH_USERS);
  console.log(data?.fetchUsers);

  const router = useRouter();

  // 이메일,비밀번호,닉네임,전화번호,인증성공여부,약관동의 선택했는지

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordChkError, setPasswordChkError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [PhoneError, setPhoneError] = useState("");

  const [phoneCheck, setPhoneCheck] = useState(false);

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

  const onChangePasswordChk = (event: any) => {
    setPasswordChk(event.target.value);
  };

  const onChangePhone = (event: any) => {
    setPhone(event.target.value);
    if (event.target.vaule !== "") {
      setPhoneError("");
    }
  };

  const onChangeCheckNum = (event: any) => {
    setCheckNum(event.target.value);
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
    console.log(result);
    Modal.success({
      content: "인증번호가 발송되었습니다.",
    });
  };

  const onClickCheckValidToken = async () => {
    try {
      const result = await checkValidToken({
        variables: {
          phone: String(phone),
          token: String(checkNum),
        },
      });
      setPhoneCheck(true);
      console.log(result.data?.checkValidToken); // output : true
      message.success("인증 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        message.error("인증 실패. 다시 시도해주세요");
      }
    }
  };
  // 원희님 조용히 해주세요
  // 다 지워버릴꺼야

  const onClickCreateUser = async () => {
    if (!checkEmail(email)) {
      setEmailError("이메일 @까지 정확하게 입력해주세요");
    }

    if (!checkPassword(password)) {
      setPasswordError("비밀번호를 8자리 이상 입력해주세요");
    }

    if (password !== passwordChk) {
      setPasswordError("비밀번호가 일치하지 않습니다");
      setPasswordChkError("비밀번호가 일치하지 않습니다");
    }

    if (!name) {
      setNameError("이름을 입력해주세요");
    }

    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요");
    }

    if (phoneCheck === false) {
      alert("핸드폰 인증을 해주세요");
      return;
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

  console.log(password);
  console.log(passwordChk);
  return (
    <SignUpPresenterPage
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeNickname={onChangeNickname}
      onChangePassword={onChangePassword}
      onChangePasswordChk={onChangePasswordChk}
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
      passwordChkError={passwordChkError}

      // phoneError={PhoneError}
    />
  );
}
