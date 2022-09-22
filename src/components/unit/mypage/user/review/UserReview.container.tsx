import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
import MyPageUserReviewUI from "./UserReview.presenter";
import { FETCH_USER_BOARDS } from "./UserReview.queries";

export default function MyPageUserReview() {
  const router = useRouter();

  const [add, setAdd] = useState(1);

  const { data } = useQuery<Pick<IQuery, "fetchUserBoards">>(FETCH_USER_BOARDS);

  const onClickToDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/community/${(e.target as HTMLDivElement).id}`);
  };

  const onClickAdd = () => {
    setAdd((prev) => prev + 1);
  };

  return (
    <MyPageUserReviewUI
      data={data}
      add={add}
      onClickToDetail={onClickToDetail}
      onClickAdd={onClickAdd}
    />
  );
}
