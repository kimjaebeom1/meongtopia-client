import { useQuery } from "@apollo/client";
import { FETCH_INCOMES } from "../mycafe/MyCafe.queries";
import MyPageStoreInComeUI from "./Income.presenter";

export default function MyPageStoreInCome() {
  const { data } = useQuery(FETCH_INCOMES);
  return <MyPageStoreInComeUI data={data} />;
}
