import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_INCOMES } from "./Income.queries";
import MyPageStoreInComeUI from "./Income.presenter";

export default function MyPageStoreInCome() {
  const router = useRouter();

  const { data } = useQuery(FETCH_INCOMES);

  const onClickToStore = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/mypage/store/income/${(e.target as HTMLDivElement).id}`);
  };
  return <MyPageStoreInComeUI data={data} onClickToStore={onClickToStore} />;
}
