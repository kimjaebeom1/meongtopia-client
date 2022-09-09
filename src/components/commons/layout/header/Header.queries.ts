import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      userID
      name
      nickname
      email
      password
      phone
      point
      role
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
