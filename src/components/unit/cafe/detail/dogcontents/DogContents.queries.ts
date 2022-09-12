import { gql } from "@apollo/client";

export const FETCH_STORE = gql`
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
