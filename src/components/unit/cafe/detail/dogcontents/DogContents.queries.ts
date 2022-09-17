import { gql } from "@apollo/client";

export const FETCH_STORE = gql`
  query fetchStore($storeID: String!) {
    fetchStore(storeID: $storeID) {
      name
      description
      entranceFee
      phone
      open
      close
      address
      addressDetail
      bigDog
      smallDog
      avgRating
      storeTag {
        name
      }
      storeImg {
        url
      }
      pet {
        name
        age
        breed
        description
        petImgUrl
      }

      locationTag {
        name
      }
    }
  }
`;

export const CREATE_RESERVATION = gql`
  mutation createReservation(
    $storeID: String!
    $createReservationInput: CreateReservationInput!
  ) {
    createReservation(
      storeID: $storeID
      createReservationInput: $createReservationInput
    ) {
      resID
      amount
    }
  }
`;

export const Toggle_Pick = gql`
  mutation togglePick($storeID: String!) {
    togglePick(storeID: $storeID)
  }
`;

export const FETCH_RESERVATION = gql`
  query fetchReservation {
    fetchReservation {
      resID
    }
  }
`;
