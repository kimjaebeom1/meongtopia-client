import * as SignUp from "./Signup.user.styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Sign } from "crypto";
import { Signup } from "../../commons/layout/header/Header.styles";
// import Checkbox from "@mui/material/Checkbox";

export default function SignupPresenterPage() {
  return (
    <SignUp.Wrapper>
      <SignUp.SignUpWrap>
        <SignUp.BtnWrap>
          <SignUp.OwnerUserWrap>
            <SignUp.Ment1>개 인 회 원 가 입</SignUp.Ment1>
            {/* <SignUp.Ment2>만 15세 이상 가능</SignUp.Ment2> */}
          </SignUp.OwnerUserWrap>

          <SignUp.OwnerUserWrap>
            <SignUp.Ment1>사 장 님 회 원 가 입</SignUp.Ment1>
            {/* <SignUp.Ment2></SignUp.Ment2> */}
          </SignUp.OwnerUserWrap>
        </SignUp.BtnWrap>

        <SignUp.ElWrap>
          <SignUp.IdPwWrap>
            <SignUp.Title>ID/PW</SignUp.Title>
            <SignUp.Input placeholder="이메일을 입력해주세요" />
            <SignUp.Error>이메일을 입력해주세요</SignUp.Error>
            <SignUp.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
            <SignUp.Error>비밀번호를 입력해주세요</SignUp.Error>
          </SignUp.IdPwWrap>

          <SignUp.InputWrap>
            <SignUp.Title>닉네임</SignUp.Title>
            <SignUp.NickNameWrap>
              <SignUp.NickNameInput placeholder="닉네임을 입력해주세요" />
              <SignUp.CheckBtn>중복확인</SignUp.CheckBtn>
            </SignUp.NickNameWrap>
            <SignUp.Error>닉네임을 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>

          <SignUp.PhoneWrap>
            <SignUp.Title>휴대전화 인증</SignUp.Title>
            <SignUp.PhoneNumWrap>
              <SignUp.PhoneNum placeholder="휴대전화 번호를 입력해주세요" />
              <SignUp.NumBtn>인증</SignUp.NumBtn>
            </SignUp.PhoneNumWrap>

            <SignUp.NumberWrap>
              <SignUp.Number placeholder="인증번호를 입력해주세요" />
              <SignUp.NumBtn>확인</SignUp.NumBtn>
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
                <CheckCircleIcon color="disabled" />
              </SignUp.AgreeChkWrap>
              <SignUp.Line />
              <SignUp.AgreeChkWrap>
                <SignUp.AgreeContents1>(필수)</SignUp.AgreeContents1>
                <SignUp.AgreeContents2>
                  개인회원 약관에 동의
                </SignUp.AgreeContents2>
                <SignUp.AgreeContents3>상세보기</SignUp.AgreeContents3>
                <CheckCircleIcon color="disabled" />
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
                <CheckCircleIcon color="disabled" />
              </SignUp.AgreeChkWrap>
            </SignUp.AgreeWrap2>
          </SignUp.AgreeWrap>

          <SignUp.SignUpBtn>회원가입</SignUp.SignUpBtn>
        </SignUp.ElWrap>
      </SignUp.SignUpWrap>
    </SignUp.Wrapper>
  );
}
