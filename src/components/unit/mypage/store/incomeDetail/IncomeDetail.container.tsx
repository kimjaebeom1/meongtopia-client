import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchStoreIncomeArgs,
} from "../../../../../commons/types/generated/types";
import MyPageStoreInComeDetailUI from "./IncomeDetail.presenter";
import { FETCH_STORE_INCOME } from "./IncomeDetail.queries";

export default function MyPageStoreInComeDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchStoreIncome">,
    IQueryFetchStoreIncomeArgs
  >(FETCH_STORE_INCOME, {
    variables: {
      storeID: String(router.query.incomeID),
    },
  });

  return <MyPageStoreInComeDetailUI data={data} />;
}
