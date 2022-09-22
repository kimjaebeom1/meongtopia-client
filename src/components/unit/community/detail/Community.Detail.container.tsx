import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./Community.Detail.queries";
import CommunityDetailPresenterPage from "./Community.Detail.presenter";
import "antd/dist/antd.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { FETCH_BOARDS } from "../list/Community.List.queries";

export default function CommunityDetailContainerPage() {
  const router = useRouter();
  const { confirm } = Modal;

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardID: String(router.query.boardID),
    },
  });

  const onClickMoveToList = () => {
    router.push("/community");
  };

  const onClickMoveToUpdate = () => {
    router.push(`/community/${router.query.boardID}/edit/`);
  };

  const onClickDeleteBoard = async () => {
    confirm({
      title: "게시글 삭제",
      icon: <ExclamationCircleOutlined />,
      content: "정말로 게시글을 삭제하시겠습니까?",
      onOk() {
        try {
          const result = deleteBoard({
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
          // console.log(result);
          Modal.success({
            content: "삭제되었습니다",
          });

          router.push("/community");
        } catch (error) {
          if (error instanceof Error) {
            alert(error);
          }
        }
      },
    });
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
