import { gql } from "@apollo/client";

export const FETCH_INCOMES = gql`
  query fetchIncomes {
    fetchIncomes {
      incomeID
      date
      paymentNum
      cancelNum
      totalCash
      store {
        storeID
        name
        description
        entranceFee
        bigDog
        smallDog
        open
        close
        address
        addressDetail
        avgRating
        pickCount
        storeTag {
          tagID
          name
        }
        storeImg {
          url
        }
      }
    }
  }
`;
