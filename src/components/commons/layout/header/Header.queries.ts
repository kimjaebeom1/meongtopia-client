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
      profileImgUrl
      pick {
        store {
          storeID
        }
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
