import { gql } from "@apollo/client";

export const FETCH_STORES = gql`
  query fetchStores($page: Float, $order: String) {
    fetchStores(page: $page, order: $order) {
      storeID
      name
      description
      entranceFee
      bigDog
      smallDog
      open
      close
      # address
      addressDetail
      avgRating
      pickCount
      locationTag {
        locationTagID
        name
      }
      storeTag {
        tagID
        name
      }
      pet {
        petImgUrl
      }
      storeImg {
        url
      }
    }
  }
`;
