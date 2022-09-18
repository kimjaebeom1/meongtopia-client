import { gql } from "@apollo/client";

export const FETCH_STORE_INCOME = gql`
  query fetchStoreIncome($storeID: String!) {
    fetchStoreIncome(storeID: $storeID) {
      incomeID
      date
      paymentNum
      cancelNum
      totalCash
      store {
        name
      }
    }
  }
`;
