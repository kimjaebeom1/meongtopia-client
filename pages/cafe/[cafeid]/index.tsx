import DetailDogContents from "../../../src/components/unit/cafe/detail/dogcontents/DogContents.container";
import DetailCafeContents from "../../../src/components/unit/cafe/detail/cafecontents/CafeContents.container";
import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 110px;
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
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
