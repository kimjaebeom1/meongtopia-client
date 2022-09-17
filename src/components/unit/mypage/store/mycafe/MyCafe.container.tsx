import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";
import { IMutation } from "../../../../../commons/types/generated/types";
import MyPageStoreMyCafeUI from "./MyCafe.presenter";
import { DELETE_STORE, FETCH_INCOMES } from "./MyCafe.queries";

export default function MyPageStoreMyCafe() {
  const router = useRouter();
  const [add, setAdd] = useState(1);

  const { data } = useQuery(FETCH_INCOMES);
  const [deleteStore] =
    useMutation<Pick<IMutation, "deleteStore">>(DELETE_STORE);

  const onClickToDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${(e.target as HTMLDivElement).id}`);
  };

  const onClickDelete = async (e: MouseEvent<HTMLDivElement>) => {
    const deleteConfirm = confirm("정말 취소하시겠습니까?");
    if (!deleteConfirm) return;
    try {
      await deleteStore({ refetchQueries: [{ query: FETCH_INCOMES }] });
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickAdd = () => {
    setAdd((prev) => prev + 1);
  };

  return (
    <MyPageStoreMyCafeUI
      data={data}
      add={add}
      onClickAdd={onClickAdd}
      onClickToDetail={onClickToDetail}
      onClickDelete={onClickDelete}
    />
  );
}
