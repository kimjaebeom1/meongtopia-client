import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchStoresArgs,
} from "../../../../commons/types/generated/types";
import CafeListUI from "./CafeList.presenter";
import { FETCH_STORES } from "./CafeList.queries";

export default function CafeList() {
  const [locationActive, setLocationActive] = useState("전체");
  const [conditionActive, setConditionActive] = useState([]);

  const { data } = useQuery<Pick<IQuery, "fetchStores">, IQueryFetchStoresArgs>(
    FETCH_STORES
  );
  console.log(data);

  const onClickLocationTag = (e: MouseEvent<HTMLDivElement>) => {
    setLocationActive((e.target as HTMLDivElement).id);
  };

  const onClickConditionTag = (e: MouseEvent<HTMLDivElement>) => {
    if (conditionActive.includes((e.target as HTMLDivElement).id)) {
      setConditionActive(
        conditionActive.filter((el) => el !== (e.target as HTMLDivElement).id)
      );
    } else
      setConditionActive((prev) => [...prev, (e.target as HTMLDivElement).id]);
  };
  return (
    <CafeListUI
      data={data}
      locationActive={locationActive}
      conditionActive={conditionActive}
      onClickLocationTag={onClickLocationTag}
      onClickConditionTag={onClickConditionTag}
    />
  );
}
