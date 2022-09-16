import styled from "@emotion/styled";
import MyPageSidebar from "../../../../src/components/commons/layout/sidebar/Sidebar.container";
import PaymentComponent from "../../../../src/components/unit/mypage/user/payment/Payment.component";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
`;

export default function PaymentPage() {
  return (
    <Container>
      <Wrapper>
        <MyPageSidebar />
        <PaymentComponent />
      </Wrapper>
    </Container>
  );
}