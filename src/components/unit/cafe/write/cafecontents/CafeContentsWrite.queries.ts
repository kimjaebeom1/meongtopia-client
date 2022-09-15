import { gql } from "@apollo/client";

export const CREATE_STORE = gql`
  mutation createStore($createStoreInput: CreateStoreInput!) {
    createStore(createStoreInput: $createStoreInput) {
      name
      storeID
    }
  }
`;

export const UPDATE_STORE = gql`
  mutation updateStore($updateStoreInput: UpdateStoreInput!) {
    updateStore(updateStoreInput: $updateStoreInput) {
      name
      storeID
    }
  }
`;

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
