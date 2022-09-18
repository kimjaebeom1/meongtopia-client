import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import HomeUI from "./HomePage.presenter";

import { FETCH_PICK_RANK, FETCH_STORES } from "./HomePage.queries";

export default function HomeContainer() {
  const { data } = useQuery(FETCH_PICK_RANK);
  const { data: recentData } = useQuery(FETCH_STORES, {
    variables: {
      order: "DESC",
    },
  });
  const router = useRouter();
  console.log(data);
  console.log(recentData);

  const onClickMoveToPick = (el) => () => {
    router.push(`/cafe/${el.storeID}`);
  };

  return (
    <HomeUI
      onClickMoveToPick={onClickMoveToPick}
      recentData={recentData}
      data={data}
    />
  );
}
