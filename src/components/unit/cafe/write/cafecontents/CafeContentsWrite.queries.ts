import { gql } from "@apollo/client";

export const CREATE_STORE = gql`
  mutation createStore($createStoreInput: createStoreInput!) {
    createStore(createStoreInput: $createStoreInput) {
      name
    }
  }
`;
