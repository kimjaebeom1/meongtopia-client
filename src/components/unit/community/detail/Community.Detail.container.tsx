import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./Community.Detail.queries";
import CommunityDetailPresenterPage from "./Community.Detail.presenter";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import "antd/dist/antd.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

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
          });
          console.log(result);
          Modal.success({
            content: "삭제되었습니다",
          });
        } catch (error) {
          if (error instanceof Error) {
            alert(getErrorMessage(error));
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