import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommunityListPresenterPage from "./Community.List.presenter";
import { FETCH_BOARDS, FETCH_USER } from "./Community.List.queries";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function CommunityListContainerPage() {
  const [startPage, setStartPage] = useState(1);
  const [isActivePage, setIsActivePage] = useState(1);

  const { data: userInfo } = useQuery(FETCH_USER);

  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage, order: "DESC" },
  });

  const onClickPage = (event: any) => {
    const isActivePage = Number(event.target.id);
    setIsActivePage(isActivePage);
    refetch({ page: Number(event.target.id) });
  };

  const lastPage = Number(data?.fetchBoards.length < 6);

  const onClickMoveToWrite = () => {
    if (!userInfo?.fetchUser.role) {
      Modal.error({
        content: "로그인 후 작성 가능합니다",
      });
    } else {
      router.push("/community/write");
    }
  };

  const onClickMoveToDetail = (event: any) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(`/community/${event.target.id}`);
  };

  const onClickHome = () => {
    router.push("/home");
  };

  return (
    <CommunityListPresenterPage
      data={data}
      onClickPage={onClickPage}
      onClickMoveToWrite={onClickMoveToWrite}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickHome={onClickHome}
      startPage={startPage}
      lastPage={lastPage}
      isActivePage={isActivePage}
    />
  );
}
