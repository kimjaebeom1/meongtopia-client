import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../../src/commons/styles/media";
import CafeContentsWrite from "../../../../src/components/unit/cafe/write/cafecontents/CafeContentsWrite.container";

const FETCH_STORE = gql`
  query fetchStore($storeID: String!) {
    fetchStore(storeID: $storeID) {
      name
      description
      entranceFee
      phone
      open
      close
      address
      addressDetail
      bigDog
      smallDog
      avgRating
      storeTag {
        name
      }
      storeImg {
        url
      }
      pet {
        name
        age
        breed
        description
        petImgUrl
      }
      locationTag {
        name
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 800px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export default function EditCafePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });

  return (
    <Container>
      <Wrapper>
        <CafeContentsWrite isEdit={true} data={data} />
      </Wrapper>
    </Container>
  );
}
