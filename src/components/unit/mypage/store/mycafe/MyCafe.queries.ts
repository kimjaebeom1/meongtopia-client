import { gql } from "@apollo/client";

export const FETCH_OWNER_STORES = gql`
  query fetchOwnerStores {
    fetchOwnerStores {
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
      pickCount
      storeTag {
        tagID
        name
      }
      storeImg {
        url
      }
      reservation {
        resID
        members
        pets
        amount
        date
        state
        user {
          nickname
        }
      }
    }
  }
`;

export const DELETE_STORE = gql`
  mutation deleteStore($storeID: String!) {
    deleteStore(storeID: $storeID)
  }
`;
