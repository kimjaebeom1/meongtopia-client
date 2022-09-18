import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./Community.Detail.queries";
import CommunityDetailPresenterPage from "./Community.Detail.presenter";
import { getErrorMessage } from "../../../../commons/libraries/utils";

export default function CommunityDetailContainerPage() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardID: String(router.query.boardID),
    },
  });

  const onClickDeleteBoard = async () => {
    try {
      const result = deleteBoard({
        variables: {
          boardID: String(router.query.boardID),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(getErrorMessage(error));
      }
    }
  };

  return (
    <CommunityDetailPresenterPage
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
    />
  );
}
