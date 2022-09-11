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

      # bigDog
      # locationTag {
      #   name
      #   locationTagID
      # }

      #   avgRating
      #   locationTag {
      #     name
      #   }
    }
  }
`;
