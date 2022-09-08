import * as Login from "./Login.styles";

export default function LoginPresenterPage(props) {
  return (
    <Login.Wrapper>
      <Login.Image />

      <Login.LoginPartWrap>
        <Login.ElWrap>
          <Login.Title>로그인</Login.Title>

          <Login.InputWrap>
            <Login.Input
              placeholder="이메일을 입력해주세요"
              onChange={props.onChangeEmail}
            />
            <Login.Error>이름을 입력해주세요</Login.Error>
          </Login.InputWrap>

          <Login.InputWrap>
            <Login.Input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={props.onChangePassword}
            />
            <Login.Error>비밀번호를 입력해주세요</Login.Error>
          </Login.InputWrap>

          <Login.InputWrap>
            <Login.Input
              placeholder="비밀번호를 다시 입력해주세요"
              type="password"
            />
            <Login.Error>비밀번호가 일치하지 않습니다</Login.Error>
          </Login.InputWrap>

          <Login.LoginBtn onClick={props.onClickLogin}>로그인</Login.LoginBtn>

          <Login.SignUp>
            아직 계정이 없으신가요?
            <Login.MoveToSignUp>회원가입</Login.MoveToSignUp>
          </Login.SignUp>
        </Login.ElWrap>

        <Login.SocialLoginWrap>
          <Login.SocialLoginBtn src="/images/kakao.png" />
          <Login.SocialLoginBtn src="/images/naver.png" />
          <Login.SocialLoginBtn src="/images/google.png" />
        </Login.SocialLoginWrap>
      </Login.LoginPartWrap>
    </Login.Wrapper>
  );
}
