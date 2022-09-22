import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      boardID
      title
      contents
      boardImg {
        url
      }
      user {
        name
        nickname
        userID
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardID: String!) {
    deleteBoard(boardID: $boardID)
  }
`;
