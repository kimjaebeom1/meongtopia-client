import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../header/Header.queries";
import * as Navigator from "./Navigator.styles";

export default function LayoutNavigator() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const onClickToMove = (page: string) => {
    router.push(page);
  };

  return (
    <Navigator.Wrapper>
      <Navigator.Menu>
        <Navigator.Icon1
          onClick={() => onClickToMove("/home/")}
          isActive={"/home/" === router.asPath}
        />
        <Navigator.Text isActive={"/home/" === router.asPath}>
          홈
        </Navigator.Text>
      </Navigator.Menu>
      <Navigator.Menu>
        <Navigator.Icon2
          onClick={() => onClickToMove("/cafe/")}
          isActive={"/cafe/" === router.asPath}
        />
        <Navigator.Text isActive={"/cafe/" === router.asPath}>
          검색
        </Navigator.Text>
      </Navigator.Menu>
      <Navigator.Menu>
        <Navigator.Icon3
          onClick={() => onClickToMove("/community/")}
          isActive={"/community/" === router.asPath}
        />
        <Navigator.Text isActive={"/community/" === router.asPath}>
          게시판
        </Navigator.Text>
      </Navigator.Menu>
      <Navigator.Menu>
        {data?.fetchUser ? (
          data?.fetchUser.role === "OWNER" ? (
            <>
              <Navigator.Icon5
                onClick={() => onClickToMove("/mypage/store/mycafe/")}
                isActive={"/mypage/store/mycafe/" === router.asPath}
              />
              <Navigator.Text
                isActive={"/mypage/store/mycafe/" === router.asPath}
              >
                MY
              </Navigator.Text>
            </>
          ) : (
            <>
              <Navigator.Icon4
                onClick={() => onClickToMove("/mypage/user/reserve/")}
                isActive={"/mypage/user/reserve/" === router.asPath}
              />
              <Navigator.Text
                isActive={"/mypage/user/reserve/" === router.asPath}
              >
                MY
              </Navigator.Text>
            </>
          )
        ) : (
          <>
            <Navigator.Icon4
              onClick={() => onClickToMove("/login/")}
              isActive={"/login/" === router.asPath}
            />
            <Navigator.Text isActive={"/login/" === router.asPath}>
              MY
            </Navigator.Text>
          </>
        )}
      </Navigator.Menu>
    </Navigator.Wrapper>
  );
}
