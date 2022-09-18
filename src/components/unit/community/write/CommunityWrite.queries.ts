import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      boardID
      title
      contents
      # boardImg {
      #   url
      # }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
    updateBoard(updateBoardInput: $updateBoardInput) {
      boardID
      title
      contents
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;