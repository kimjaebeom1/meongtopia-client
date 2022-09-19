import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import LoginButton from "../../buttons/login";
import MenuButton from "../../buttons/menu";
import { FETCH_USER, LOGOUT } from "./Header.queries";
import * as Header from "./Header.styles";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const MENUS = [
  { page: "/home", title: "홈으로" },
  { page: "/cafe", title: "카페 검색" },
  { page: "/community", title: "커뮤니티" },
];

export default function LayoutHeader() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const userInfo = data?.fetchUser;

  const [logout] = useMutation(LOGOUT);

  const onCLickLogout = async () => {
    await logout();
    await router.push("/home/");
    location.reload();
  };

  return (
    <Header.Container>
      <Header.Wrapper>
        <Link href="/">
          <Header.Logo src="/images/logo01.svg" />
        </Link>
        <Header.MenuContainer>
          <Header.DogIcon src="/images/dog.gif" />
          {MENUS.map((el) => (
            <MenuButton key={uuidv4()} page={el.page} title={el.title} />
          ))}
          {/* {userInfo?.role === "OWNER" ? (
            <MenuButton page="/cafe/new" title="카페 등록" />
          ) : (
            <div></div>
          )} */}
          <Header.LoginContainer>
            {data ? (
              userInfo?.role === "CLIENT" ? (
                <div>
                  <Header.MypageContainer>
                    <LoginButton
                      href="/mypage/user/reserve"
                      title="마이페이지"
                    />
                    <Header.Logout onClick={onCLickLogout}>
                      로그아웃
                    </Header.Logout>
                  </Header.MypageContainer>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      lineHeight: "normal",
                      fontSize: "0.9rem",
                    }}
                  >{`${userInfo.nickname}님 안녕하세요!`}</span>
                </div>
              ) : (
                <div>
                  <Header.MypageContainer>
                    <LoginButton
                      href="/mypage/store/mycafe"
                      title="마이페이지"
                    />
                    <Header.Logout onClick={onCLickLogout}>
                      로그아웃
                    </Header.Logout>
                  </Header.MypageContainer>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      lineHeight: "normal",
                      fontSize: "0.9rem",
                    }}
                  >{`${userInfo?.nickname}사장님 안녕하세요!`}</span>
                </div>
              )
            ) : (
              <>
                <LoginButton href="/login" title="로그인" />
                <LoginButton href="/signup" title="회원가입" />
              </>
            )}
          </Header.LoginContainer>
        </Header.MenuContainer>
      </Header.Wrapper>
    </Header.Container>
  );
}
