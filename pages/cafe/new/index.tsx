import styled from "@emotion/styled";
import CafeContentsWrite from "../../../src/components/unit/cafe/write/cafecontents/CafeContentsWrite.container";
import DogContentsWrite from "../../../src/components/unit/cafe/write/dogcontents/DogContentsWrite.container";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
`;

export default function CafeWritePage() {
  return (
    <Container>
      <Wrapper>
        <CafeContentsWrite />
      </Wrapper>
    </Container>
  );
}
