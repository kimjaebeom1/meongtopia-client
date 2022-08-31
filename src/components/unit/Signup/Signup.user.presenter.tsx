import * as SignUp from "./Signup.user.styles";

export default function SignupPresenterPage() {
  return (
    <SignUp.Wrapper>
      <SignUp.Image />

      <SignUp.SignUpWrap>
        <SignUp.ElWrap>
          <SignUp.Title>회원가입</SignUp.Title>
          <SignUp.InputWrap>
            <SignUp.Input placeholder="이름을 입력해주세요" />
            <SignUp.Error>이름을 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>
          <SignUp.InputWrap>
            <SignUp.Input placeholder="닉네임을 입력해주세요" />
            <SignUp.Error>닉네임을 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>
          <SignUp.InputWrap>
            <SignUp.Input placeholder="이메일을 입력해주세요" />
            <SignUp.Error>이메일을 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>
          <SignUp.InputWrap>
            <SignUp.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
            <SignUp.Error>비밀번호를 입력해주세요</SignUp.Error>
          </SignUp.InputWrap>
          <SignUp.InputWrap>
            <SignUp.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
            <SignUp.Error>비밀번호가 일치하지 않습니다</SignUp.Error>
          </SignUp.InputWrap>

          <SignUp.PhoneWrap>
            <SignUp.PhoneNum placeholder="휴대전화 번호를 입력해주세요" />
            <SignUp.NumBtn>인증</SignUp.NumBtn>
          </SignUp.PhoneWrap>

          <SignUp.NumberWrap>
            <SignUp.Number placeholder="인증번호를 입력해주세요" />
            <SignUp.NumBtn>확인</SignUp.NumBtn>
          </SignUp.NumberWrap>

          <SignUp.SignUpBtn>회원가입</SignUp.SignUpBtn>
        </SignUp.ElWrap>
      </SignUp.SignUpWrap>
    </SignUp.Wrapper>
  );
}
