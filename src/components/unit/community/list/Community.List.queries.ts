import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float, $order: String) {
    fetchBoards(page: $page, order: $order) {
      boardID
      title
      contents
      boardImg {
        url
      }
      user {
        nickname
      }
    }
  }
`;
