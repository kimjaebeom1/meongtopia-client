import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import MyPageUserPickUI from "./UserPick.presenter";

export default function MyPageUserPick() {
  const router = useRouter();
  const [add, setAdd] = useState(1);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const onClickToReserve = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${(e.target as HTMLDivElement).id}`);
  };

  const onClickAdd = () => {
    setAdd((prev) => prev + 1);
  };
  return (
    <MyPageUserPickUI
      data={data}
      add={add}
      onClickToReserve={onClickToReserve}
      onClickAdd={onClickAdd}
    />
  );
}
