import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_USER,
} from "./Community.Detail.queries";
import CommunityDetailPresenterPage from "./Community.Detail.presenter";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { FETCH_BOARDS } from "../list/Community.List.queries";

export default function CommunityDetailContainerPage(props: any) {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: String(router.query.boardID) },
  });

  const { data: user } = useQuery(FETCH_USER);

  const onClickMoveToList = () => {
    router.push("/community");
  };

  const onClickMoveToUpdate = () => {
    if (user?.fetchUser.userID !== data.fetchBoard.user.userID) {
      Modal.info({
        content: "본인이 작성한 게시글만 수정이 가능합니다",
      });
      return;
    }

    router.push(`/community/${router.query.boardID}/edit/`);
  };

  const onClickDeleteBoard = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardID: String(router.query.boardID),
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: { page: 1, order: "DESC" },
          },
        ],
      });
      Modal.success({
        content: "게시글이 삭제되었습니다",
      });
      router.push("/community");
    } catch (error) {
      if (error instanceof Error) {
        Modal.info({
          content: "본인의 게시글만 삭제 가능합니다.",
        });
      }
    }
  };

  return (
    <CommunityDetailPresenterPage
      data={data}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
    />
  );
}
