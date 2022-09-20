import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_OWNER_STORES } from "../mycafe/MyCafe.queries";
import MyPageStoreCheckReserveUI from "./CheckReserve.presenter";

export default function MyPageStoreCheckReserve() {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchOwnerStores">>(FETCH_OWNER_STORES);

  const onClickToStore = (e: MouseEvent<HTMLDivElement>) => {
    router.push(
      `/mypage/store/checkReserve/${(e.target as HTMLDivElement).id}`
    );
  };
  return (
    <MyPageStoreCheckReserveUI data={data} onClickToStore={onClickToStore} />
  );
}
