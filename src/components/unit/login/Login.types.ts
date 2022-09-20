import { ChangeEvent } from "react";

export interface ILoginPresenterPageProps {
  emailError: string;
  passwordError: string;
  isActive: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickMoveToSignup: () => void;
  onClickNaver: () => void;
  onClickGoogle: () => void;
  onClickKakao: () => void;
}
