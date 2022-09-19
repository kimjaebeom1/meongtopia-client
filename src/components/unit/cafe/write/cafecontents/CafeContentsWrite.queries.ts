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
  mutation updateStore(
    $storeID: String!
    $updateStoreInput: UpdateStoreInput!
  ) {
    updateStore(
      storeID: $storeID

      updateStoreInput: $updateStoreInput
    ) {
      name
      storeID
    }
  }
`;
