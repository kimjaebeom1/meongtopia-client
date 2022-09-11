import { useRouter } from "next/router";
import SignUpOwnerPresenterPage from "./Signup.owner.presenter";
import { useMutation } from "@apollo/client";
import {
  CHECK_VALID_TOKEN,
  GET_TOKEN,
  CREATE_OWNER,
} from "./Signup.owner.queries";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alertTitleClasses } from "@mui/material";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
      "이메일 형식에 맞지 않습니다"
    ),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "비밀번호는 최소 8자리 이상 입력해주세요"),
  storeName: yup.string().required("상호명을 입력해주세요"),
});

export default function SignUpOwnerContainerPage() {
  const router = useRouter();

  const [getToken] = useMutation(GET_TOKEN);
  const [checkValidToken] = useMutation(CHECK_VALID_TOKEN);
  const [createOwner] = useMutation(CREATE_OWNER);

  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);

  const [phoneNum, setPhoneNum] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [file, setFile] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value);
  };
  const onChangeCheckNum = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckNum(event.target.value);
  };

  const onChangeFile = (event: any) => {
    setFile(event.target.value);
  };

  console.log(file); // output: C:\fakepath\Frame.svg

  const onClickSubmit = () => {};

  return (
    <SignUpOwnerPresenterPage
      handleSubmit={handleSubmit}
      register={register}
      formState={formState} // 에러메세지담긴곳
      onChangePhone={onChangePhone}
      onChangeCheckNum={onChangeCheckNum}
      onChangeFile={onChangeFile}
      minutes={minutes}
      seconds={seconds}
      isCountdown={isCountdown}
      onClickSubmit={onClickSubmit}
    />
  );
}
