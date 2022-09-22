import * as SignUp from "./Signup.owner.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { ISignUpPresenterPageProps } from "./Signup.owner.types";

export default function SignUpOwnerPresenterPage(
  props: ISignUpPresenterPageProps
) {
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
            {/* <SignUp.Ment2>만 15세 이상 가능</SignUp.Ment2> */}
          </SignUp.UserWrap>

          <SignUp.OwnerWrap onClick={props.onClickMoveToOwner}>
            사 장 님 회 원 가 입{/* <SignUp.Ment2></SignUp.Ment2> */}
          </SignUp.OwnerWrap>
        </SignUp.BtnWrap>
        {/* <form onSubmit={props.handleSubmit(props.onClickSubmit)}> */}
        <SignUp.OwnerNumWrap>
          <SignUp.Title>사업자 등록번호</SignUp.Title>
          <SignUp.OwnerImg
            type="file"
            onChange={props.onChangeFile}
            onClick={props.onChangeImg}
          />
        </SignUp.OwnerNumWrap>

        <SignUp.ElWrap>
          <SignUp.IdPwWrap>
            <SignUp.Title>ID</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="이메일을 입력해주세요"
                type="text"
                onChange={props.onChangeEmail}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>{props.emailError}</SignUp.Error>
          </SignUp.IdPwWrap>

          <SignUp.IdPwWrap>
            <SignUp.Title>Password</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="비밀번호 8자리 이상 입력해주세요"
                type="password"
                onChange={props.onChangePassword}
                // register={props.register("password")}
              />
            </SignUp.InputElWrap>

            <SignUp.Error>
              {props.passwordError}
              {/* {props.formState.errors.password?.message} */}
            </SignUp.Error>

            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="비밀번호를 다시 입력해주세요"
                type="password"
                onChange={props.onChangePasswordChk}
                // register={props.register("password")}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>
              {props.passwordChkError}
              {/* {props.formState.errors.password?.message} */}
            </SignUp.Error>
          </SignUp.IdPwWrap>

          <SignUp.InputWrap>
            <SignUp.Title>상호명</SignUp.Title>
            <SignUp.InputElWrap>
              <SignUp.Input
                placeholder="상호명을 입력해주세요"
                type="text"
                onChange={props.onChangeStoreName}
                // register={props.register("storeName")}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>
              {props.storeNameError}
              {/* {props.formState.errors.storeName?.message} */}
            </SignUp.Error>
          </SignUp.InputWrap>

          <SignUp.PhoneWrap>
            <SignUp.Title>휴대전화 인증</SignUp.Title>
            <SignUp.PhoneNumWrap>
              <SignUp.InputElWrap>
                <SignUp.Input
                  onChange={props.onChangePhone}
                  placeholder="휴대전화 번호를 입력해주세요"
                />
              </SignUp.InputElWrap>
              <SignUp.NumBtn
                onClick={props.onClickGetToken}
                isActivePhone={props.isActivePhone ? true : props.isActivePhone}
              >
                인증
              </SignUp.NumBtn>
            </SignUp.PhoneNumWrap>

            <SignUp.NumberWrap>
              <SignUp.InputElWrap>
                <SignUp.Input
                  onChange={props.onChangeCheckNum}
                  placeholder="인증번호를 입력해주세요"
                />
                <SignUp.Timer>
                  {`${String(props.minutes).padStart(2, "0")} : ${String(
                    props.seconds
                  ).padStart(2, "0")}`}
                </SignUp.Timer>
              </SignUp.InputElWrap>
              <SignUp.NumBtn2
                onClick={props.onClickCheckValidToken}
                isActiveNum={props.isActiveNum ? true : props.isActiveNum}
              >
                확인
              </SignUp.NumBtn2>
            </SignUp.NumberWrap>
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
                {/* <CheckCircleIcon /> */}
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
              </SignUp.AgreeChkWrap>{" "}
            </SignUp.AgreeWrap2>
          </SignUp.AgreeWrap>

          <SignUp.SignUpBtn onClick={props.onClickSubmit}>
            회원가입
          </SignUp.SignUpBtn>
        </SignUp.ElWrap>
        {/* </form> */}
      </SignUp.SignUpWrap>
    </SignUp.Wrapper>
  );
}
