import styled from "@emotion/styled";
import { breakPoints } from "../../../../src/commons/styles/media";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import MyPageStoreResponse from "../../../../src/components/unit/mypage/store/response/Response.container";

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

export default function MyPageStoreResponsePage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <MyPageStoreResponse />
      </Wrapper>
    </Container>
  );
}
