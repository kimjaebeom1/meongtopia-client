import MenuButton from "../../buttons/menu";
import * as Sidebar from "./Sidebar.styles";

const USER_MENUS = [
  { page: "/mypage/user/reserve", title: "예약 내역" },
  { page: "/mypage/user/pick", title: "내가 찜한 목록" },
  { page: "/mypage/user/review", title: "내가 쓴 리뷰" },
];

export default function MyPageSidebarUI() {
  return (
    <Sidebar.Wrapper>
      <Sidebar.InfoContainer>
        <Sidebar.List>
          <Sidebar.profileImg />
        </Sidebar.List>
        <Sidebar.List>님 안녕하세요!</Sidebar.List>
        <Sidebar.List>
          <span>포인트</span>
          <Sidebar.Cost>0</Sidebar.Cost>
          <span>원</span>
        </Sidebar.List>
        <Sidebar.List>회원정보 수정</Sidebar.List>
        <Sidebar.List>로그아웃</Sidebar.List>
      </Sidebar.InfoContainer>
      <Sidebar.MenuContainer>
        {USER_MENUS.map((el) => (
          <MenuButton key={el.page} page={el.page} title={el.title} />
        ))}
      </Sidebar.MenuContainer>
    </Sidebar.Wrapper>
  );
}
