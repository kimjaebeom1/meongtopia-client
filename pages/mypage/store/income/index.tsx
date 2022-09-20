import styled from "@emotion/styled";
import { breakPoints } from "../../../../src/commons/styles/media";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageStoreInCome from "../../../../src/components/unit/mypage/store/income/Income.container";

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

export default function MyPageStoreInComePage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageStoreInCome />
      </Wrapper>
    </Container>
  );
}
