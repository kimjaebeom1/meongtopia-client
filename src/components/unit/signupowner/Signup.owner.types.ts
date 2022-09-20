import { Dispatch, SetStateAction, ChangeEvent } from "react";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface ISignUpPresenterPageProps {
  emailError: string;

  onClickMoveToOwner?: () => void;
  onClickMoveToUser: () => void;
  onClickGetToken: () => Promise<void>;
  onClickCheckValidToken: () => Promise<void>;
  onClickNicknameChk?: () => Promise<void>;
  onChangeFile: (event: any) => void;
  onClickSubmit: () => Promise<void>;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckNum: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordChk: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStoreName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeImg: (event: any) => Promise<void>;
  storeNameError?: string;
  isCountdown: boolean;
  passwordError: string;
  passwordChkError: string;
  minutes: number;
  seconds: number;
  isActivePhone: boolean;
  isActiveNum: boolean;
  isActive?: boolean;
  setIsCountdown?: Dispatch<SetStateAction<boolean>>;
  // setIsActivePhone?: Dispatch<SetStateAction<boolean>>;
}
