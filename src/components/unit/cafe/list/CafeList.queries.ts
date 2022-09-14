import { gql } from "@apollo/client";

export const FETCH_STORES = gql`
  query fetchStores($page: Float) {
    fetchStores(page: $page) {
      storeID
      name
      description
      entranceFee
      bigDog
      smallDog
      open
      close
      address
      addressDetail
      avgRating
      locationTag {
        locationTagID
        name
      }
      storeTag {
        tagID
        name
      }
      storeImg {
        url
      }
    }
  }
`;
