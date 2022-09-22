import { gql } from "@apollo/client";

export const FETCH_USER_BOARDS = gql`
  query fetchUserBoards {
    fetchUserBoards {
      boardID
      title
      contents
      boardImg {
        url
      }
    }
  }
`;
