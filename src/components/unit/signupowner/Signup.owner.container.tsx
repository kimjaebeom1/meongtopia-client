import { useRouter } from "next/router";
import SignUpOwnerPresenterPage from "./Signup.owner.presenter";
import { useMutation } from "@apollo/client";
import {
  CHECK_VALID_TOKEN,
  GET_TOKEN,
  CREATE_OWNER,
} from "./Signup.owner.queries";

import { useState } from "react";

export default function SignUpOwnerContainerPage() {
  const router = useRouter();

  const [createOwner] = useMutation(CREATE_OWNER);
  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);

  const [phone, setPhone] = useState("");
  const [checkNum, setCheckNum] = useState("");

  const onClickCreateOwner = async () => {
    const result = createOwner({
      variables: {},
    });
  };

  const onClickGetToken = async () => {
    console.log("클릭");
    const result = await getToken({
      variables: {
        phone: String(phone),
      },
    });
    console.log("성공이올시다");
    console.log(result);
  };

  const onClickCheckValidToken = async () => {
    console.log("인증성공?");
    const result = await checkValidToken({
      variables: {
        phone: String(phone),
        token: String(checkNum),
      },
    });
    console.log(result);
    console.log("인증성공!");
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeCheckNum = (event) => {
    setCheckNum(event.target.value);
  };

  const onClickMoveToUser = () => {
    router.push("/signup");
  };
  return (
    <SignUpOwnerPresenterPage
      onClickMoveToUser={onClickMoveToUser}
      onChangePhone={onChangePhone}
      oncChangeCheckNum={onChangeCheckNum}
      onClickGetToken={onClickGetToken}
      onClickCheckValidToken={onClickCheckValidToken}
      onClickCreateOwner={onClickCreateOwner}
    />
  );
}
