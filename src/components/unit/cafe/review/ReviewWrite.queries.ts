import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview(
    $createReviewInput: CreateReviewInput!
    $storeID: String!
  ) {
    createReview(createReviewInput: $createReviewInput, storeID: $StoreID) {
      contents
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation updateReview(
    $updateReviewInput: UpdateReviewInput!
    $storeID: String!
  ) {
    updateReview(updateReviewInput: $updateReviewInput, storeID: $StoreID) {
      contents
    }
  }
`;
