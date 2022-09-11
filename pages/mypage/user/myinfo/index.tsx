import styled from "@emotion/styled";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageUserMyInfo from "../../../../src/components/unit/mypage/user/myinfo/MyInfo.container";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
`;

export default function MyPageUserMyInfoPage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageUserMyInfo />
      </Wrapper>
    </Container>
  );
}
