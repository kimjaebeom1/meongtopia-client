import * as SignUp from "./Signup.owner.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState } from "react";
interface ICheckAgreeBtn {
  onClick?: () => void;
  onChange?: (e: any) => void;
  id?: string | undefined;
  checked?: boolean | undefined;
}

export default function SignUpOwnerPresenterPage(props) {
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
  const isActive = !checked.includes(false);

  const handleCheck = (i) => (event) => {
    const newChecked = [...checked];
    newChecked[i] = event.target.checked;
    setChecked(newChecked);
    console.log(checked[i]);
  };

  useEffect(() => {
    setChecked([false, false]);
  }, []);

  // const [checkedItems, setCheckedItems] = useState(new Set())

  // const checkedItemHandler = (id , isChecked) => {
  //   if(isChecked) {
  //     checkedItems.add(id)
  //     setCheckedItems(checkedItems)
  //   } else if (!isChecked && checkedItems.has(id)) {
  //     checkedItems.delete(id)
  //     setCheckedItems(checkedItems)
  //   }
  // }

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

        <SignUp.OwnerNumWrap>
          <SignUp.Title>사업자 등록번호</SignUp.Title>
          <SignUp.OwnerImg type="file" />
        </SignUp.OwnerNumWrap>

        <SignUp.ElWrap>
          <SignUp.IdPwWrap>
            <SignUp.Title>ID/PW</SignUp.Title>
            <SignUp.Input
              placeholder="이메일을 입력해주세요"
              onChange={props.onChangeEmail}
            />
            <SignUp.Error>이메일을 입력해주세요</SignUp.Error>
            <SignUp.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={props.onChangePassword}
            />
            <SignUp.Error>비밀번호를 입력해주세요</SignUp.Error>
          </SignUp.IdPwWrap>

          <SignUp.InputWrap>
            <SignUp.Title>상호명</SignUp.Title>
            <SignUp.NickNameWrap>
              <SignUp.NickNameInput
                onChange={props.onChangeNickname}
                placeholder="상호명을 입력해주세요"
              />
            </SignUp.NickNameWrap>
            <SignUp.Error>상호명을 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>

          <SignUp.PhoneWrap>
            <SignUp.Title>휴대전화 인증</SignUp.Title>
            <SignUp.PhoneNumWrap>
              <SignUp.PhoneNum
                onChange={props.onChangePhone}
                placeholder="휴대전화 번호를 입력해주세요"
              />
              <SignUp.NumBtn onClick={props.onClickGetToken}>
                인증
              </SignUp.NumBtn>
            </SignUp.PhoneNumWrap>

            <SignUp.NumberWrap>
              <SignUp.Number
                onChange={props.onChangeCheckNum}
                placeholder="인증번호를 입력해주세요"
              />

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

          <SignUp.SignUpBtn onClick={props.onClickCreateOwner}>
            회원가입
          </SignUp.SignUpBtn>
        </SignUp.ElWrap>
      </SignUp.SignUpWrap>
    </SignUp.Wrapper>
  );
}
