import styled from "@emotion/styled";
import { breakPoints } from "../../../../../src/commons/styles/media";
import MyPageSidebar from "../../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageStoreInComeDetail from "../../../../../src/components/unit/mypage/store/incomeDetail/IncomeDetail.container";

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

export default function MyPageStoreInComeDetailPage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageStoreInComeDetail />
      </Wrapper>
    </Container>
  );
}
