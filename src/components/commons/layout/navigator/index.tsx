import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../header/Header.queries";
import * as Navigator from "./Navigator.styles";

export default function LayoutNavigator() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false)
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const onClickToMove = (page: string) => {
    router.push(page);
  };

  return (
    <Navigator.Wrapper>
      <Navigator.Menu>
        <Navigator.Icon1 
        
        onClick={() => onClickToMove("/home/")} />
      </Navigator.Menu>
      <Navigator.Menu>
        <Navigator.Icon2 onClick={() => onClickToMove("/cafe/")} />
      </Navigator.Menu>
      <Navigator.Menu>
        <Navigator.Icon3 onClick={() => onClickToMove("/community")} />
      </Navigator.Menu>
      <Navigator.Menu>
        {data?.fetchUser ? (
          data?.fetchUser.role === "OWNER" ? (
            <Navigator.Icon5
              onClick={() => onClickToMove("/mypage/store/mycafe")}
            />
          ) : (
            <Navigator.Icon4
              onClick={() => onClickToMove("/mypage/user/reserve")}
            />
          )
        ) : (
          <Navigator.Icon4 onClick={() => onClickToMove("/login")} />
        )}
      </Navigator.Menu>
    </Navigator.Wrapper>
  );
}
