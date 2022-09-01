import * as Header from "./Header.styles";

export default function LayoutHeader() {
  return (
    <Header.Container>
      <Header.Wrapper>
        <Header.Logo>
          <img
            style={{
              width: "8rem",
            }}
            src="/images/logo.png"
          />
        </Header.Logo>
        <Header.MenuContainer>
          <Header.Signin>로그인</Header.Signin>
          <Header.Signup>회원가입</Header.Signup>
        </Header.MenuContainer>
      </Header.Wrapper>
    </Header.Container>
  );
}
