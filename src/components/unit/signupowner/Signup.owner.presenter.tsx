import * as SignUp from "./Signup.owner.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState } from "react";

export default function SignUpOwnerPresenterPage(props: any) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F5CF1F",
      },
      secondary: {
        main: "#C4C4C4",
      },
    },
  });

  const [checked, setChecked] = useState([true, true, true]);

  const handleCheck = (i: any) => (event: any) => {
    const newChecked = [...checked];
    newChecked[i] = event.target.checked;
    setChecked(newChecked);
    console.log(checked);
  };

  useEffect(() => {
    setChecked([false, false, false]);
  }, []);

  // const isActive = !checked.includes(true);
  // const [checked, setChecked] = useState([true, true, true]);
  // const handleCheck = (i: any) => (event: any) => {
  //   const newChecked = [...checked];
  //   newChecked[i] = event.target.checked;
  //   setChecked(newChecked);
  //   console.log(checked[i]);
  // };

  // useEffect(() => {
  //   setChecked([false, false, false]);
  // }, []);

  return (
    <SignUp.Wrapper>
      <SignUp.SignUpWrap>
        <SignUp.BtnWrap>
          <SignUp.OwnerUserWrap>
            <SignUp.Ment1 onClick={props.onClickMoveToUser}>
              개 인 회 원 가 입
            </SignUp.Ment1>
            {/* <SignUp.Ment2>만 15세 이상 가능</SignUp.Ment2> */}
          </SignUp.OwnerUserWrap>

          <SignUp.OwnerUserWrap>
            <SignUp.Ment1 onClick={props.onClickMoveToOwner}>
              사 장 님 회 원 가 입
            </SignUp.Ment1>
            {/* <SignUp.Ment2></SignUp.Ment2> */}
          </SignUp.OwnerUserWrap>
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
                // register=props.register("email")}
              />
            </SignUp.InputElWrap>
            <SignUp.Error>
              {props.emailError}
              {/* {props.formState.errors.email?.message} */}
            </SignUp.Error>
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
              <SignUp.NumBtn onClick={props.onClickGetToken}>
                인증
              </SignUp.NumBtn>
            </SignUp.PhoneNumWrap>

            {/* <SignUp.NumberWrap>
              <SignUp.Number
                onChange={props.onChangeCheckNum}
                placeholder="인증번호를 입력해주세요"
              />

              <SignUp.NumBtn onClick={props.onClickCheckValidToken}>
                확인
              </SignUp.NumBtn>
            </SignUp.NumberWrap> */}
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
              <SignUp.NumBtn onClick={props.onClickCheckValidToken}>
                확인
              </SignUp.NumBtn>
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
                <SignUp.AgreeContents3>상세보기</SignUp.AgreeContents3>
                {/* <CheckCircleIcon /> */}
                <ThemeProvider theme={theme}>
                  <Checkbox
                    checked={checked[0]}
                    onChange={handleCheck(0)}
                    icon={<CheckCircleOutlineIcon color="secondary" />}
                    checkedIcon={<CheckCircleIcon />}
                    onClick={props.onClick}
                    id={props.id}
                  />
                </ThemeProvider>
              </SignUp.AgreeChkWrap>
              <SignUp.Line />
              <SignUp.AgreeChkWrap>
                <SignUp.AgreeContents1>(필수)</SignUp.AgreeContents1>
                <SignUp.AgreeContents2>
                  개인회원 약관에 동의
                </SignUp.AgreeContents2>
                <SignUp.AgreeContents3>상세보기</SignUp.AgreeContents3>
                <ThemeProvider theme={theme}>
                  <Checkbox
                    checked={checked[1]}
                    onChange={handleCheck(1)}
                    icon={<CheckCircleOutlineIcon color="secondary" />}
                    checkedIcon={<CheckCircleIcon />}
                    onClick={props.onClick}
                    id={props.id}
                  />
                </ThemeProvider>
              </SignUp.AgreeChkWrap>{" "}
              <SignUp.Line />
              <SignUp.AgreeChkWrap>
                <SignUp.AgreeContents1 style={{ color: "gray" }}>
                  (선택)
                </SignUp.AgreeContents1>
                <SignUp.AgreeContents2>
                  개인회원 약관에 동의
                </SignUp.AgreeContents2>
                <SignUp.AgreeContents3>상세보기</SignUp.AgreeContents3>
                <ThemeProvider theme={theme}>
                  <Checkbox
                    icon={<CheckCircleOutlineIcon color="secondary" />}
                    checkedIcon={<CheckCircleIcon />}
                    onClick={props.onClick}
                    id={props.id}
                    checked={checked[2]}
                    onChange={handleCheck(2)}
                  />
                </ThemeProvider>
              </SignUp.AgreeChkWrap>
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
