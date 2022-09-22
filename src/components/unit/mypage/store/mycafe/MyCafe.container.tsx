import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { getErrorMessage } from "../../../../../commons/libraries/utils";
import { IMutation } from "../../../../../commons/types/generated/types";
import MyPageStoreMyCafeUI from "./MyCafe.presenter";
import { DELETE_STORE, FETCH_OWNER_STORES } from "./MyCafe.queries";

export default function MyPageStoreMyCafe() {
  const router = useRouter();
  const [add, setAdd] = useState(1);

  const { data } = useQuery(FETCH_OWNER_STORES);

  console.log(data);

  const [deleteStore] =
    useMutation<Pick<IMutation, "deleteStore">>(DELETE_STORE);

  const onClickToDetail = (e: MouseEvent<HTMLUListElement>) => {
    router.push(`/cafe/${(e.currentTarget as HTMLUListElement).id}`);
  };

  const onClickToEdit = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${(e.currentTarget as HTMLDivElement).id}/edit`);
  };

  const onClickDelete = async (e: MouseEvent<HTMLDivElement>) => {
    const deleteConfirm = confirm("정말 삭제하시겠습니까?");
    if (!deleteConfirm) return;
    try {
      await deleteStore({
        variables: {
          storeID: String((e.currentTarget as HTMLDivElement).id),
        },
        refetchQueries: [{ query: FETCH_OWNER_STORES }],
      });
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
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
