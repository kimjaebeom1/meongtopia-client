import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import LoginButton from "../../buttons/login";
import MenuButton from "../../buttons/menu";
import * as Header from "./Header.styles";

const MENUS = [
  { page: "/cafe", title: "애견카페 찾기" },
  { page: "/review", title: "리뷰 확인" },
];

const FETCH_USER = gql`
  query fetchUser {
    userID
    name
    nickname
  }
`;
export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER);

  console.log(data);
  return (
    <Header.Container>
      <Header.Wrapper>
        <Link href="/">
          <Header.Logo src="/images/logo.svg" />
        </Link>
        <Header.MenuContainer>
          {MENUS.map((el) => (
            <MenuButton key={el.page} page={el.page} title={el.title} />
          ))}
          <Header.LoginContainer>
            <LoginButton href="/login" title="로그인" />
            <LoginButton href="/signup" title="회원가입" />
          </Header.LoginContainer>
        </Header.MenuContainer>
      </Header.Wrapper>
    </Header.Container>
  );
}
