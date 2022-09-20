import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserMyInfoUIProps {
  data?: Pick<IQuery, "fetchUser">;
  menuId: string;
  isChangePwd: boolean;
  errorMessage: string;
  onClickToUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onClickToChangePwd: () => void;
  onClickChangePwd: () => void;
  onChangeUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePwdConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneNumber: (e: ChangeEvent<HTMLInputElement>) => void;
}
