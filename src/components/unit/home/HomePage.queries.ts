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
      storeImg {
        url
      }
      address
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
    }
  }
`;

export const FETCH_PICK_RANK = gql`
  query fetchPickRank($order: String = "DESC") {
    fetchPickRank(order: $order) {
      name
      bigDog
      smallDog
      storeID
      avgRating
      description
      storeImg {
        url
      }
      locationTag {
        name
      }
      pickCount
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      title
      contents
      boardImg {
        url
      }
    }
  }
`;
