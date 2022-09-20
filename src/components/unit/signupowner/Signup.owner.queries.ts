import { gql } from "@apollo/client";

export const CREATE_OWNER = gql`
  mutation createOwner($createUserInput: CreateUserInput!) {
    createOwner(createUserInput: $createUserInput) {
      userID
    }
  }
`;

// img url 보내주는 api
export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const GET_TOKEN = gql`
  mutation getToken($phone: String!) {
    getToken(phone: $phone)
  }
`;

export const CHECK_VALID_TOKEN = gql`
  mutation checkValidToken($phone: String!, $token: String!) {
    checkValidToken(phone: $phone, token: $token)
  }
`;
