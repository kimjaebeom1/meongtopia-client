import styled from "@emotion/styled";
import { breakPoints } from "../../../../src/commons/styles/media";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageStoreMyCafe from "../../../../src/components/unit/mypage/store/mycafe/MyCafe.container";

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

export default function MyPageStoreMyCafePage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageStoreMyCafe />
      </Wrapper>
    </Container>
  );
}
