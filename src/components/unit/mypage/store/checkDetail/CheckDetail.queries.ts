import { gql } from "@apollo/client";

export const CHECK_RESERVATION = gql`
  mutation checkReservation($resID: String!) {
    checkReservation(resID: $resID)
  }
`;
