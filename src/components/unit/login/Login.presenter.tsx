import * as Login from "./Login.styles";

export default function LoginPresenterPage(props) {
  return (
    <Login.Wrapper>
      <Login.LoginPartWrap>
        <Login.ElWrap>
          <Login.InputWrap>
            <Login.Title>로그인이 필요한 서비스입니다.</Login.Title>
            <Login.SubTitle>
              멍토피아 회원이 아니라면 지금 회원가입 해주세요.
            </Login.SubTitle>
            {/* <Login.InputBorder> */}
            <Login.Input
              placeholder="이메일을 입력해주세요."
              onChange={props.onChangeEmail}
            />
            {/* </Login.InputBorder> */}
            <Login.Error>{props.emailError}</Login.Error>
          </Login.InputWrap>

          <Login.InputWrap>
            {/* <Login.InputBorder> */}
            <Login.Input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangePassword}
            />
            {/* </Login.InputBorder> */}
            <Login.Error>{props.passwordError}</Login.Error>
          </Login.InputWrap>

          <Login.LoginBtn
            onClick={props.onClickLogin}
            isActive={props.isActive ? true : props.isActive}
          >
            로그인
          </Login.LoginBtn>

          <Login.SignUp>
            아직 계정이 없으신가요?
            <Login.MoveToSignUp onClick={props.onClickMoveToSignup}>
              회원가입
            </Login.MoveToSignUp>
          </Login.SignUp>

          <Login.SocialLoginWrap>
            <Login.SocialLoginGoogle
              src="/images/google.png"
              onClick={props.onClickGoogle}
            />
            <Login.SocialLoginNaver
              src="/images/naver.png"
              onClick={props.onClickNaver}
            />
            <Login.SocialLoginKakao
              src="/images/kakao.png"
              onClick={props.onClickKakao}
            />
          </Login.SocialLoginWrap>
        </Login.ElWrap>

        <Login.Line />

        <Login.Ad src="/images/landingad.png" />
      </Login.LoginPartWrap>
    </Login.Wrapper>
  );
}
