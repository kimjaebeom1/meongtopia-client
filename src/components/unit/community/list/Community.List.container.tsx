import { useQuery } from "@apollo/client";
import CommunityListPresenterPage from "./Community.List.presenter";
import { FETCH_BOARDS } from "./Community.List.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function CommunityListContainerPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(`/community/${event.target.id}`);
  };

  // const onFetchMore = () => {
  //   if(!data) return;

  //   fetchMore({
  //     variables : {  }
  //   })
  // }

  return (
    <CommunityListPresenterPage
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
