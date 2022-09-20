import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReview(
    $createReviewInput: CreateReviewInput!
    $storeID: String!
  ) {
    createReview(createReviewInput: $createReviewInput, storeID: $storeID) {
      contents
      rating
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation updateReview(
    $updateReviewInput: UpdateReviewInput!
    $storeID: String!
  ) {
    updateReview(updateReviewInput: $updateReviewInput, storeID: $storeID) {
      contents
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview {
    deleteReview
  }
`;

export const FETCH_STORE_REVIEWS = gql`
  query fetchStoreReviewes($storeID: String!) {
    fetchStoreReviewes(storeID: $storeID) {
      rating
      contents
      createdAt
      user {
        nickname
        profileImgUrl
      }
    }
  }
`;
