import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(email: $email, updateUserInput: $updateUserInput) {
      userID
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email)
  }
`;

export const UPDATE_USER_PWD = gql`
  mutation updateUserPwd($email: String!, $updateUserPwdInput: String!) {
    updateUserPwd(email: $email, updateUserPwdInput: $updateUserPwdInput)
  }
`;
