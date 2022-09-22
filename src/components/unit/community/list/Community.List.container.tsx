import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import CommunityListPresenterPage from "./Community.List.presenter";
import { FETCH_BOARDS } from "./Community.List.queries";

export default function CommunityListContainerPage() {
  const [page, setPage] = useState(1);

  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: page, order: "DESC" },
  });

  // const lastPage = data?.fetchBoards?.length;

  const onClickPrev = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    refetch({ page: page });
  };

  const onClickNext = () => {
    if (data?.fetchBoards.length < 10) return;
    setPage((prev) => prev + 1);
    refetch({ page: page });
  };

  const onClickMoveToWrite = () => {
    router.push("/community/write");
  };

  const onClickMoveToDetail = (event: any) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(/community/${event.target.id});
  };

  return (
    <CommunityListPresenterPage
      data={data}
      onClickMoveToWrite={onClickMoveToWrite}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}