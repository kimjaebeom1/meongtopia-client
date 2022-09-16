import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import LoginButton from "../../buttons/login";
import MenuButton from "../../buttons/menu";
import { FETCH_USER, LOGOUT } from "./Header.queries";
import * as Header from "./Header.styles";

const MENUS = [{ page: "/cafe", title: "애견카페 찾기" }];

export default function LayoutHeader() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  const userInfo = data?.fetchUser;

  const [logout] = useMutation(LOGOUT);

  const onCLickLogout = async () => {
    logout();
    await router.push("/");
    location.reload();
  };
  return (
    <Header.Container>
      <Header.Wrapper>
        <Link href="/home">
          <Header.Logo src="/images/logo01.svg" />
        </Link>
        <Header.MenuContainer>
          <Header.DogIcon src="/images/dog.gif" />
          {MENUS.map((el) => (
            <MenuButton key={el.page} page={el.page} title={el.title} />
          ))}
          {userInfo?.role === "OWNER" ? (
            <MenuButton page="/cafe/new" title="카페 등록" />
          ) : (
            <div></div>
          )}
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
                    }}
                  >{`${userInfo.nickname}님 안녕하세요!`}</span>
                </div>
              ) : (
                <div>
                  <Header.MypageContainer>
                    <LoginButton href="/mypage/store/" title="마이페이지" />
                    <Header.Logout onClick={onCLickLogout}>
                      로그아웃
                    </Header.Logout>
                  </Header.MypageContainer>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      lineHeight: "normal",
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
