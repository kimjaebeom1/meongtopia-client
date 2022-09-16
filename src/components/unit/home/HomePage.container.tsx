import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import HomeUI from "./HomePage.presenter";

import { FETCH_PICK_RANK } from "./HomePage.queries";

export default function HomeContainer() {
  const { data } = useQuery(FETCH_PICK_RANK);

  console.log(data);
  return <HomeUI data={data} />;
}
