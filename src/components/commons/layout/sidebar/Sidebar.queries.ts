import { gql } from "@apollo/client";

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const DELETE_PROFILE = gql`
  mutation deleteProfile {
    deleteProfile
  }
`;
