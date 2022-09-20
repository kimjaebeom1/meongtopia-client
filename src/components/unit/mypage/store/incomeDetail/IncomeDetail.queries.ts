import { gql } from "@apollo/client";

export const FETCH_STORE_INCOME = gql`
  query fetchStoreIncome($storeID: String!, $order: String) {
    fetchStoreIncome(storeID: $storeID, order: $order) {
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
