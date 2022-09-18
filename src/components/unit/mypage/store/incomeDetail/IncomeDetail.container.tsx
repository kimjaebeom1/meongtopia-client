import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageStoreInComeDetailUI from "./IncomeDetail.presenter";
import { FETCH_STORE_INCOME } from "./IncomeDetail.queries";

export default function MyPageStoreInComeDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE_INCOME, {
    variables: {
      storeID: String(router.query.incomeID),
    },
  });

  return <MyPageStoreInComeDetailUI data={data} />;
}
