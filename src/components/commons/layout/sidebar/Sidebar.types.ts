import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPageSidebarUIProps {
  fileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  onChangeImg: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdateProfile: (imgUrl: string) => void;
  onClickToUpdate: () => void;
  onClickLogout: () => void;
  onClickToPayment: () => void;
  onClickDeleteProfile: () => void;
  data?: Pick<IQuery, "fetchUser">;
}
