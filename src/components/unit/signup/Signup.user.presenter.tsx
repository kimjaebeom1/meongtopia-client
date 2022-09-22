import * as SignUp from "./Signup.user.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { ISignUpPresenterPageProps } from "./Signup.user.types";

export default function SignUpPresenterPage(props: ISignUpPresenterPageProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffa500",
      },
      secondary: {
        main: "#b1b0b0",
      },
    },
  });

  const [checked, setChecked] = useState([true, true, true]);

  const handleCheck = (i: any) => (event: any) => {
    const newChecked = [...checked];
    newChecked[i] = event.target.checked;
    setChecked(newChecked);
    // console.log(checked);
  };

  useEffect(() => {
    setChecked([false, false, false]);
  }, []);

  const onClickContents = () => {
    Modal.info({
      content: "",
    });
  };

  return (
    <SignUp.Wrapper>
      <SignUp.SignUpWrap>
        <SignUp.BtnWrap>
          <SignUp.UserWrap onClick={props.onClickMoveToUser}>
            개 인 회 원 가 입
          </SignUp.UserWrap>

          <SignUp.OwnerWrap onClick={props.onClickMoveToOwner}>
            사 장 님 회 원 가 입
          </SignUp.OwnerWrap>
        </SignUp.BtnWrap>

        <SignUp.ElWrap>
          <SignUp.IdPwWrap>
            <SignUp.Title>ID</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="이메일을 입력해주세요"
                onChange={props.onChangeEmail}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>{props.emailError}</SignUp.Error>

            <SignUp.Title>Password</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="비밀번호 8자리 이상 입력해주세요"
                type="password"
                onChange={props.onChangePassword}
                minLength={8}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>{props.passwordError}</SignUp.Error>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="비밀번호를 다시 입력해주세요"
                type="password"
                onChange={props.onChangePasswordChk}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>{props.passwordChkError}</SignUp.Error>
          </SignUp.IdPwWrap>

          <SignUp.InputWrap>
            <SignUp.Title>이름 & 닉네임</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="이름을 입력해주세요"
                onChange={props.onChangeName}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>{props.nameError}</SignUp.Error>
            <SignUp.NumWrap>
              <SignUp.NickNameInput
                onChange={props.onChangeNickname}
                placeholder="닉네임을 입력해주세요"
              />
              <SignUp.CheckBtn
                onClick={props.onClickNicknameChk}
                isActive={props.isActive ? true : props.isActive}
              >
                중복확인
              </SignUp.CheckBtn>
            </SignUp.NumWrap>
            <SignUp.Error>{props.nicknameError}</SignUp.Error>
          </SignUp.InputWrap>

          <SignUp.PhoneWrap>
            <SignUp.Title>휴대전화 인증</SignUp.Title>
            <SignUp.PhoneNumWrap>
              <SignUp.PhoneInputWrap>
                <SignUp.PhoneNumInput
                  onChange={props.onChangePhone}
                  placeholder="휴대전화 번호를 입력해주세요"
                />
              </SignUp.PhoneInputWrap>
              <SignUp.NumBtn
                onClick={props.onClickGetToken}
                isActivePhone={props.isActivePhone ? true : props.isActivePhone}
              >
                인증
              </SignUp.NumBtn>
            </SignUp.PhoneNumWrap>

            <SignUp.PhoneNumWrap>
              <SignUp.NumWrap>
                <SignUp.NumInput
                  onChange={props.onChangeCheckNum}
                  placeholder="인증번호를 입력해주세요"
                />

                <SignUp.Timer>
                  {`${String(props.minutes).padStart(2, "0")} : ${String(
                    props.seconds
                  ).padStart(2, "0")}`}
                </SignUp.Timer>
              </SignUp.NumWrap>

              <SignUp.NumBtn2
                onClick={props.onClickCheckValidToken}
                isActiveNum={props.isActiveNum ? true : props.isActiveNum}
              >
                확인
              </SignUp.NumBtn2>
            </SignUp.PhoneNumWrap>
          </SignUp.PhoneWrap>

          <SignUp.AgreeWrap>
            <SignUp.Title>약관동의</SignUp.Title>

            <SignUp.AgreeWrap2>
              <SignUp.AgreeChkWrap>
                <SignUp.AgreeContents1>(필수)</SignUp.AgreeContents1>
                <SignUp.AgreeContents2>
                  개인회원 약관에 동의
                </SignUp.AgreeContents2>
                <SignUp.AgreeContents3 onClick={onClickContents}>
                  상세보기
                </SignUp.AgreeContents3>
                <ThemeProvider theme={theme}>
                  <Checkbox
                    checked={checked[0]}
                    onChange={handleCheck(0)}
                    icon={<CheckCircleOutlineIcon color="secondary" />}
                    checkedIcon={<CheckCircleIcon />}
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </ThemeProvider>
              </SignUp.AgreeChkWrap>
              <SignUp.Line />
              <SignUp.AgreeChkWrap>
                <SignUp.AgreeContents1>(필수)</SignUp.AgreeContents1>
                <SignUp.AgreeContents2>
                  개인회원 약관에 동의
                </SignUp.AgreeContents2>
                <SignUp.AgreeContents3 onClick={onClickContents}>
                  상세보기
                </SignUp.AgreeContents3>
                <ThemeProvider theme={theme}>
                  <Checkbox
                    checked={checked[1]}
                    onChange={handleCheck(1)}
                    icon={<CheckCircleOutlineIcon color="secondary" />}
                    checkedIcon={<CheckCircleIcon />}
                    style={{
                      width: "10px",
                      height: "10px",
                    }}
                  />
                </ThemeProvider>
              </SignUp.AgreeChkWrap>
            </SignUp.AgreeWrap2>
          </SignUp.AgreeWrap>

          <SignUp.SignUpBtn onClick={props.onClickCreateUser}>
            회원가입
          </SignUp.SignUpBtn>
        </SignUp.ElWrap>
      </SignUp.SignUpWrap>
    </SignUp.Wrapper>
  );
}
