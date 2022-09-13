import SignUpPresenterPage from "./Signup.user.presenter";
import {
  CREATE_USER,
  GET_TOKEN,
  CHECK_VALID_TOKEN,
  CHECK_NICKNAME,
} from "./Signup.user.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal, message } from "antd";
import "antd/dist/antd.css";
import { checkEmail, checkPassword } from "../../../commons/libraries/utils";

export default function SignUpContainerPage() {
  const [createUser] = useMutation(CREATE_USER);
  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);
  const [checkNickname] = useMutation(CHECK_NICKNAME);

  const router = useRouter();

  // 이메일,비밀번호,닉네임,전화번호,인증성공여부,약관동의 선택했는지

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [nicknameChk, setNicknameChk] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordChkError, setPasswordChkError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [nameError, setNameError] = useState("");

  const [phoneCheck, setPhoneCheck] = useState(false);

  //====================================================================================//
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);

  useEffect(() => {
    if (isCountdown === false) return;

    const timer = setInterval(() => {
      if (Number(seconds) > 0) {
        setSeconds(Number(seconds) - 1);
      }

      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(timer);
        } else {
          setMinutes(Number(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds, isCountdown]);

  //====================================================================================//

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

  const onClickNicknameChk = async () => {
    if (nickname === "") {
      Modal.error({
        content: "닉네임을 입력해주세요",
      });
      return;
    }
    try {
      const result = await checkNickname({
        variables: {
          nickname,
        },
      });
      console.log(result.data?.checkNickname);
      if (result.data?.checkNickname) {
        Modal.error({
          content: "중복된 닉네임이 있습니다. 다시 입력해주세요",
        });
        return;
      } else if (!result.data?.checkNickname) {
        Modal.success({
          content: "닉네임 등록되었습니다",
        });
        setNicknameChk(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickGetToken = async () => {
    if (phone.length < 11) {
      message.error({
        content: "번호를 제대로 입력해주세요",
      });
      return;
    }
    try {
      console.log("시작");
      const result = await getToken({
        variables: {
          phone: String(phone),
        },
      });
      console.log(result);
      Modal.success({
        content: "인증번호가 발송되었습니다.",
      });
      setIsCountdown((prev) => !prev); // countdown 시작
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: "이미 등록되어 있는 번호입니다",
        });
      }
    }
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
      setIsCountdown((prev) => !prev);
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
      setEmailError("이메일 @까지 입력해주세요");
    }

    if (!checkPassword(password)) {
      setPasswordError("비밀번호를 8자리 이상 입력해주세요");
      return;
    }

    if (password !== passwordChk) {
      setPasswordError("비밀번호가 일치하지 않습니다");
      setPasswordChkError("비밀번호가 일치하지 않습니다");
      return;
    }

    if (!name) {
      setNameError("이름을 입력해주세요");
    }

    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요");
    }

    if (nicknameChk === false) {
      Modal.error({
        content: "닉네임을 등록해주세요",
      });
    }

    if (phoneCheck === false) {
      Modal.error({
        content: "핸드폰 인증해주세요",
      });
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
      onClickNicknameChk={onClickNicknameChk}
      emailError={emailError}
      passwordError={passwordError}
      nameError={nameError}
      nicknameError={nicknameError}
      passwordChkError={passwordChkError}
      minutes={minutes}
      seconds={seconds}
      setIsCountdown={setIsCountdown}
      // phoneError={PhoneError}
    />
  );
}
