import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationUpdateUserArgs,
  IMutationUploadFileArgs,
  IQuery,
  IUpdateUserInput,
} from "../../../../commons/types/generated/types";
import { UPDATE_USER } from "../../../unit/mypage/user/myinfo/MyInfo.queries";
import { FETCH_USER } from "../header/Header.queries";
import MyPageSidebarUI from "./Sidebar.presenter";
import { LOGOUT, UPLOAD_FILE } from "./Sidebar.queries";

export default function MyPageSidebar() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];
    if (!img) return;

    try {
      const result = await uploadFile({ variables: { files: [img] } });
      await onClickUpdateProfile(result.data?.uploadFile[0] || "");
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickUpdateProfile = async (imgUrl: string) => {
    const updateUserInput: IUpdateUserInput = {};
    updateUserInput.profileImgUrl = imgUrl;
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
    } catch (error) {
      getErrorMessage(error);
    }
  };

  const onClickToUpdate = () => {
    router.push("/mypage/user/myinfo");
  };

  const onClickLogout = async () => {
    logout();
    await router.push("/");
    location.reload();
  };

  const onClickToPayment = () => {
    router.push("/mypage/user/payment/");
  };

  const onClickDeleteProfile = async () => {
    const updateUserInput: IUpdateUserInput = {};
    updateUserInput.profileImgUrl = "";
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
    } catch (error) {
      getErrorMessage(error);
    }
  };

  return (
    <MyPageSidebarUI
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onChangeImg={onChangeImg}
      onClickUpdateProfile={onClickUpdateProfile}
      onClickLogout={onClickLogout}
      onClickToUpdate={onClickToUpdate}
      onClickToPayment={onClickToPayment}
      onClickDeleteProfile={onClickDeleteProfile}
      data={data}
    />
  );
}
