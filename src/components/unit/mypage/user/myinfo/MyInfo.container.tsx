import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  checkPassword,
  getErrorMessage,
} from "../../../../../commons/libraries/utils";
import { accessTokenState } from "../../../../../commons/store";
import {
  IMutation,
  IMutationDeleteUserArgs,
  IMutationUpdateUserArgs,
  IMutationUpdateUserPwdArgs,
  IQuery,
  IUpdateUserInput,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";

import MyPageUserMyInfoUI from "./MyInfo.presenter";
import { DELETE_USER, UPDATE_USER, UPDATE_USER_PWD } from "./MyInfo.queries";

export default function MyPageUserMyInfo() {
  const router = useRouter();

  const [menuId, setMenuId] = useState("");
  const [update, setUpdate] = useState("");
  const [isChangePwd, setIsChangePwd] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const DATA_INDEX_VALUE = [
    data?.fetchUser.email,
    data?.fetchUser.name,
    data?.fetchUser.phone,
    data?.fetchUser.nickname,
  ];

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);
  const [deleteUser] = useMutation<
    Pick<IMutation, "deleteUser">,
    IMutationDeleteUserArgs
  >(DELETE_USER);
  const [updateUserPwd] = useMutation<
    Pick<IMutation, "updateUserPwd">,
    IMutationUpdateUserPwdArgs
  >(UPDATE_USER_PWD);

  // 계정정보 수정 바로가기 함수
  const onClickToUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    if (menuId === (e.target as HTMLButtonElement).id) setMenuId("");
    else if (!menuId) {
      setMenuId((e.target as HTMLButtonElement).id);
    } else {
      setMenuId((e.target as HTMLButtonElement).id);
      const input = document.getElementById("input") as HTMLInputElement;
      input.value =
        DATA_INDEX_VALUE[Number((e.target as HTMLButtonElement).id)] || "";
    }
  };

  const onChangeUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdate(e.target.value);
  };

  // 수정하기 함수
  const onClickUpdate = async () => {
    const updateUserInput: IUpdateUserInput = {};
    if (menuId === "1") updateUserInput.name = update;
    if (menuId === "2") updateUserInput.phone = update;
    if (menuId === "3") updateUserInput.nickname = update;
    try {
      const result = await updateUser({
        variables: {
          email: String(data?.fetchUser.email),
          updateUserInput,
        },
        refetchQueries: [
          {
            query: FETCH_USER,
          },
        ],
      });
      setMenuId("");
    } catch (error) {
      getErrorMessage(error);
    }
  };

  // 계정 삭제 함수
  const onClickDelete = async () => {
    const confirmDelete = confirm("정말 계정을 삭제하시겠습니까?");
    if (confirmDelete) {
      try {
        const result = await deleteUser({
          variables: {
            email: String(data?.fetchUser.email),
          },
        });
        await router.push("/");
        location.reload();
      } catch (error) {
        getErrorMessage(error);
      }
    }
  };

  // 비밀번호 변경 바로가기 함수
  const onClickToChangePwd = () => {
    if (isChangePwd) setIsChangePwd(false);
    else setIsChangePwd(true);
  };

  const onChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
    if (!checkPassword(e.target.value)) {
      setErrorMessage(
        "비밀번호는 영문과 숫자를 포함한 8자리 이상 입력해주세요."
      );
      return;
    } else {
      setErrorMessage("");
      setPwd(e.target.value);
    }
  };

  const onChangePwdConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPwdConfirm(e.target.value);
  };

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  // 비밀번호 변경 함수
  const onClickChangePwd = async () => {
    if (pwd !== pwdConfirm) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (phoneNumber !== data?.fetchUser.phone) {
      setErrorMessage("휴대폰 번호가 일치하지 않습니다.");
      return;
    }
    try {
      const result = await updateUserPwd({
        variables: {
          email: String(data?.fetchUser.email),
          updateUserPwdInput: pwd,
          phone: phoneNumber,
        },
      });
      alert("변경이 완료되었습니다.");
      setIsChangePwd(false);
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <MyPageUserMyInfoUI
      data={data}
      menuId={menuId}
      isChangePwd={isChangePwd}
      errorMessage={errorMessage}
      onClickToUpdate={onClickToUpdate}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      onClickToChangePwd={onClickToChangePwd}
      onClickChangePwd={onClickChangePwd}
      onChangeUpdate={onChangeUpdate}
      onChangePwd={onChangePwd}
      onChangePwdConfirm={onChangePwdConfirm}
      onChangePhoneNumber={onChangePhoneNumber}
    />
  );
}
