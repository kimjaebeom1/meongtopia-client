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

export const schema = yup.object({
  name: yup.string().required("업체명을 입력해주세요"),
  open: yup.string().required("오픈시간을 입력해주세요"),
  close: yup.string().required("오픈시간을 입력해주세요"),
});
