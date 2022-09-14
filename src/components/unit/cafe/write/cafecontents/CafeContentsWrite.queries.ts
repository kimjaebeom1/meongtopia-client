import { gql } from "@apollo/client";
import * as yup from "yup";

export const CREATE_STORE = gql`
  mutation createStore($createStoreInput: CreateStoreInput!) {
    createStore(createStoreInput: $createStoreInput) {
      name
      storeID
    }
  }
`;
