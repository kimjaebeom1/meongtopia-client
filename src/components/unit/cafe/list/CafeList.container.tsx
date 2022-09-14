import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchStoresArgs,
} from "../../../../commons/types/generated/types";
import CafeListUI from "./CafeList.presenter";
import { FETCH_STORES } from "./CafeList.queries";

export default function CafeList() {
  const router = useRouter();

  const [locationActive, setLocationActive] = useState("전체");
  const [conditionActive, setConditionActive] = useState([""]);
  const [search, setSearch] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchStores">,
    IQueryFetchStoresArgs
  >(FETCH_STORES);

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

  const onClickConditionTagInit = () => {
    setConditionActive([""]);
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchStores.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchStores)
          return { fetchStores: [...prev.fetchStores] };
        return {
          fetchStores: [...prev.fetchStores, ...fetchMoreResult.fetchStores],
        };
      },
    });
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  const onClickMoveToDetail = (e: MouseEvent<HTMLUListElement>) => {
    router.push(`/cafe/${(e.currentTarget as HTMLUListElement).id}`);
  };

  return (
    <CafeListUI
      data={data}
      search={search}
      locationActive={locationActive}
      conditionActive={conditionActive}
      onClickLocationTag={onClickLocationTag}
      onClickConditionTag={onClickConditionTag}
      onClickConditionTagInit={onClickConditionTagInit}
      onFetchMore={onFetchMore}
      onChangeSearch={onChangeSearch}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
