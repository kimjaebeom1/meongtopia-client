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


