import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      boardID
      title
      contents
      boardImg {
        url
      }
    }
  }
`;