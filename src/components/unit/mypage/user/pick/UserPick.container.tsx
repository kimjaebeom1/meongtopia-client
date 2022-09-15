import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

import MyPageUserPickUI from "./UserPick.presenter";
import { FETCH_PICKS } from "./UserPick.queries";

export default function MyPageUserPick() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchPicks">>(FETCH_PICKS);
  console.log(data);

  const onClickToReserve = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${(e.target as HTMLDivElement).id}`);
  };
  return <MyPageUserPickUI data={data} onClickToReserve={onClickToReserve} />;
}
