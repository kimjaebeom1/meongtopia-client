import { gql } from "@apollo/client";

export const FETCH_USER_RESERVATION = gql`
  query fetchUserReservation {
    fetchUserReservation {
      resID
      members
      pets
      amount
      date
      state
      store {
        storeID
        avgRating
        name
        entranceFee
        storeImg {
          url
        }
      }
    }
  }
`;

export const FETCH_CANCEL_RESERVATION = gql`
  query fetchCancelReservation {
    fetchCancelReservation {
      resID
    }
  }
`;

export const CANCEL_RESERVATION = gql`
  mutation cancelReservation($storeID: String!, $date: String!) {
    cancelReservation(storeID: $storeID, date: $date)
  }
`;
