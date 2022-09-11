import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../header/Header.queries";
import MyPageSidebarUI from "./Sidebar.presenter";
import { LOGOUT } from "./Sidebar.queries";

export default function MyPageSidebar() {
  const router = useRouter();
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const onClickUpdate = () => {
    router.push("/mypage/user/myinfo");
  };

  const onClickLogout = async () => {
    logout();
    await router.push("/");
    location.reload();
  };
  return (
    <MyPageSidebarUI
      onClickLogout={onClickLogout}
      onClickUpdate={onClickUpdate}
      data={data}
    />
  );
}
