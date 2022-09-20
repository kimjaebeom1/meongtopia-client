import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HomeUI from "./HomePage.presenter";
import {
  FETCH_BOARDS,
  FETCH_PICK_RANK,
  FETCH_STORES,
} from "./HomePage.queries";

export default function HomeContainer() {
  const { data } = useQuery(FETCH_PICK_RANK);
  const { data: recentData } = useQuery(FETCH_STORES, {
    variables: {
      order: "DESC",
    },
  });
  const { data: boardsData } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoveToPick = (el: any) => () => {
    router.push(`/cafe/${el.storeID}`);
  };

  return (
    <HomeUI
      onClickMoveToPick={onClickMoveToPick}
      recentData={recentData}
      data={data}
      boardsData={boardsData}
    />
  );
}
