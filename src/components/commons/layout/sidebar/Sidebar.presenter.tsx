import MenuButton from "../../buttons/menu";
import * as Sidebar from "./Sidebar.styles";
import { IMyPageSidebarUIProps } from "./Sidebar.types";

const USER_MENUS = [
  { page: "/mypage/user/reserve", title: "예약 내역" },
  { page: "/mypage/user/pick", title: "내가 찜한 목록" },
  { page: "/mypage/user/review", title: "내가 쓴 리뷰" },
];

export default function MyPageSidebarUI(props: IMyPageSidebarUIProps) {
  return (
    <Sidebar.Wrapper>
      <Sidebar.InfoContainer>
        <Sidebar.List>
          <Sidebar.profileImg />
        </Sidebar.List>
        <Sidebar.List>
          <Sidebar.InfoText>{props.data?.fetchUser.nickname}</Sidebar.InfoText>
          <span>님 안녕하세요!</span>
        </Sidebar.List>
        <Sidebar.List>
          <Sidebar.PointIcon />
          <span>내 포인트:&nbsp;</span>
          <Sidebar.InfoText>
            {props.data?.fetchUser.point.toLocaleString()}
          </Sidebar.InfoText>
          &nbsp;<span>원</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Sidebar.Charge>충전하기</Sidebar.Charge>
        </Sidebar.List>
        <Sidebar.List>
          <Sidebar.UpdateIcon />
          <Sidebar.ClickSpan onClick={props.onClickUpdate}>
            회원정보 수정
          </Sidebar.ClickSpan>
        </Sidebar.List>
        <Sidebar.List>
          <Sidebar.LogoutIcon />
          <Sidebar.ClickSpan onClick={props.onClickLogout}>
            로그아웃
          </Sidebar.ClickSpan>
        </Sidebar.List>
      </Sidebar.InfoContainer>
      <Sidebar.MenuContainer>
        {USER_MENUS.map((el) => (
          <MenuButton key={el.page} page={el.page} title={el.title} />
        ))}
      </Sidebar.MenuContainer>
    </Sidebar.Wrapper>
  );
}
