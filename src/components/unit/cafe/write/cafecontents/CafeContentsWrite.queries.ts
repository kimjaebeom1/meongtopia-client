import { gql } from "@apollo/client";

export const CREATE_STORE = gql`
  mutation createStore($createStoreInput: CreateStoreInput!) {
    createStore(createStoreInput: $createStoreInput) {
      name
      storeID
    }
  }
`;
