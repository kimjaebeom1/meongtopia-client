import DetailDogContents from "../../../src/components/unit/cafe/detail/dogcontents/DogContents.container";
import DetailCafeContents from "../../../src/components/unit/cafe/detail/cafecontents/CafeContents.container";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 110px;
  width: 63%;
  display: flex;
  flex-direction: column;
`;

export default function CafeDetailPage() {
  return (
    <Container>
      <Wrapper>
        <DetailDogContents />
      </Wrapper>
    </Container>
  );
}
