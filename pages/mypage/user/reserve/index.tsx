import styled from "@emotion/styled";
import { breakPoints } from "../../../../src/commons/styles/media";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageUserReserve from "../../../../src/components/unit/mypage/user/reserve/UserReserve.container";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export default function MyPageUserReservePage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageUserReserve />
      </Wrapper>
    </Container>
  );
}

// export default withAuth(MyPageUserReservePage);
