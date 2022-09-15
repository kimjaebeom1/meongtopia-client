import { gql } from "@apollo/client";

export const FETCH_STORES = gql`
  query fetchStores {
    fetchStores {
      name
      avgRating
      address
      open
      close
      entranceFee
    }
  }
`;

export const FETCH_PICK_RANK = gql`
  query fetchPickRank {
    fetchPickRank {
      storeID
      name
      avgRating
      description
      storeImg {
        url
      }
    }
  }
`;
