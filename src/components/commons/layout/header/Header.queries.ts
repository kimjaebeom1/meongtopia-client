import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      userID
      nickname
      role
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
