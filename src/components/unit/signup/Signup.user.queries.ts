import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      userID
      nickname
    }
  }
`;

export const FETCH_USERS = gql`
  query fetchUser {
    fetchUser {
      nickname
    }
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
