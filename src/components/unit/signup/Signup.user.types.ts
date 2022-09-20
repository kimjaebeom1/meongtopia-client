import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface ISignUpPresenterPageProps {
  emailError: string;
  onChangeName: (event: any) => void;
  onChangeEmail: (event: any) => void;
  onChangeNickname: (event: any) => void;
  onChangePassword: (event: any) => void;
  onChangePasswordChk: (event: any) => void;
  onChangePhone: (event: any) => void;
  onChangeCheckNum: (event: any) => void;
  onClickCreateUser: () => Promise<void>;
  onClickMoveToOwner: () => void;
  onClickMoveToUser: () => void;
  onClickGetToken: () => Promise<void>;
  onClickCheckValidToken: () => Promise<void>;
  onClickNicknameChk: () => Promise<void>;
  passwordError: string;
  nameError: string;
  nicknameError: string;
  passwordChkError: string;
  minutes: number;
  seconds: number;
  isActivePhone: boolean;
  isActiveNum: boolean;
  isActive: boolean;
  setIsCountdown: Dispatch<SetStateAction<boolean>>;
}
