import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import CommunityPresenterPage from "./CommunityWrite.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./CommunityWrite.queries";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function CommunityContainerPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [file, setFile] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  // const onChangeFile = (event: any) => {
  //   setFile(event.target.value);
  // };

  // img url를 만들어주는 api
  const onChangeImg = async (event: any) => {
    const ImageFile = event.target.files?.[0];

    try {
      const result = await uploadFile({ variables: { files: ImageFile } });
      setFile(result.data?.uploadFile);
      console.log(result.data?.uploadFile);
    } catch (error) {
      if (error instanceof Error) {
        alert(getErrorMessage(error));
      }
    }
  };

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    // if (!(data.title && data.contents)) {
    //   alert("모든 값을 입력해주세요");
    // }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            boardImg: file,
          },
        },
      });
      console.log(result.data?.createBoard);
      router.push(`/community/${result.data?.createBoard.boardID}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(getErrorMessage(error));
      }
    }
  };

  return (
    <CommunityPresenterPage
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      handleChange={handleChange}
      onChangeImg={onChangeImg}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      // onChangeFile={onChangeFile}
    />
  );
}
