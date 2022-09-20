import MenuButton from "../../buttons/menu";
import * as Sidebar from "./Sidebar.styles";
import { IMyPageSidebarUIProps } from "./Sidebar.types";

const USER_MENUS = [
  { page: "/mypage/user/reserve", title: "예약 내역" },
  { page: "/mypage/user/pick", title: "내가 찜한 목록" },
  { page: "/mypage/user/review", title: "내가 쓴 추천글" },
];

const STORE_MENUS = [
  { page: "/mypage/store/mycafe", title: "내 카페" },
  { page: "/mypage/store/income", title: "수입 내역" },
  { page: "/mypage/store/checkReserve", title: "예약 확인" },
];

export default function MyPageSidebarUI(props: IMyPageSidebarUIProps) {
  return (
    <Sidebar.Wrapper>
      <Sidebar.InfoContainer>
        <Sidebar.InfoWrapper>
          <Sidebar.List>
            <input
              type="file"
              ref={props.fileRef}
              style={{ display: "none" }}
              onChange={props.onChangeImg}
            />
            {props.data?.fetchUser.profileImgUrl ? (
              <>
                <Sidebar.Delete onClick={props.onClickDeleteProfile} />
                <img
                  onClick={props.onClickUpload}
                  src={`https://storage.googleapis.com/${props.data.fetchUser.profileImgUrl}`}
                />
              </>
            ) : (
              <Sidebar.profileImg onClick={props.onClickUpload} />
            )}
          </Sidebar.List>

          <Sidebar.List>
            <Sidebar.InfoText>
              {props.data?.fetchUser.nickname}
            </Sidebar.InfoText>
            <span>님 안녕하세요!</span>
          </Sidebar.List>
        </Sidebar.InfoWrapper>
        <Sidebar.InfoWrapper>
          <Sidebar.List>
            <Sidebar.UpdateIcon />
            <Sidebar.ClickSpan onClick={props.onClickToUpdate}>
              회원정보 수정
            </Sidebar.ClickSpan>
          </Sidebar.List>
          <Sidebar.List>
            <Sidebar.LogoutIcon />
            <Sidebar.ClickSpan onClick={props.onClickLogout}>
              로그아웃
            </Sidebar.ClickSpan>
          </Sidebar.List>
        </Sidebar.InfoWrapper>
        <Sidebar.InfoWrapper>
          <Sidebar.List>
            <Sidebar.PointIcon />
            <span>내 포인트:&nbsp;</span>
            <Sidebar.InfoText>
              {props.data?.fetchUser.point.toLocaleString()}
            </Sidebar.InfoText>
            &nbsp;<span>원</span>
          </Sidebar.List>
          {props.data?.fetchUser.role === "CLIENT" ? (
            <Sidebar.Charge onClick={props.onClickToPayment}>
              충전하기
            </Sidebar.Charge>
          ) : (
            <Sidebar.Charge onClick={() => alert("준비중입니다.")}>
              정산하기
            </Sidebar.Charge>
          )}
        </Sidebar.InfoWrapper>
      </Sidebar.InfoContainer>
      <Sidebar.MenuContainer>
        {props.data?.fetchUser.role === "CLIENT"
          ? USER_MENUS.map((el) => (
              <MenuButton key={el.page} page={el.page} title={el.title} />
            ))
          : STORE_MENUS.map((el) => (
              <MenuButton key={el.page} page={el.page} title={el.title} />
            ))}
      </Sidebar.MenuContainer>
    </Sidebar.Wrapper>
  );
}
