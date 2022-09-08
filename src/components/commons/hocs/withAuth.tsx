import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login/");
    }
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};
