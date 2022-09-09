import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageSidebarUI from "./Sidebar.presenter";
import { LOGOUT } from "./Sidebar.queries";

export default function MyPageSidebar() {
  const router = useRouter();
  const [logout] = useMutation(LOGOUT);

  const onCLickLogout = async () => {
    logout();
    await router.push("/");
    location.reload();
  };
  return <MyPageSidebarUI onCLickLogout={onCLickLogout} />;
}
