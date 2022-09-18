import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { getErrorMessage } from "../../../../commons/libraries/utils";
import CommunityPresenterPage from "./CommunityWrite.presenter";
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./CommunityWrite.queries";
import { IUpdateBoardInput } from "./CommunityWrite.types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Modal } from "antd";
import { ConsoleSqlOutlined } from "@ant-design/icons";

export default function CommunityContainerPage(props) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [file, setFile] = useState("");
  const [isActive, setIsActive] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

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

  // 등록하기
  const onClickSubmit = async (data: any) => {
    if (!(data.title && data.contents && file)) {
      Modal.info({});
      return;
    }

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

  // 수정하기
  const onClickUpdate = async (data: any) => {
    const updateBoardInputs: IUpdateBoardInput = {};
    if (data.title) updateBoardInputs.title = data.title;
    if (data.contents) updateBoardInputs.contents = data.contents;
    if (file) updateBoardInputs.file = file;

    console.log(updateBoardInputs.title);

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            updateBoardInputs,
            // title: updateBoardInputs.title,
            // contents: updateBoardInputs.contents,
            // file: updateBoardInputs.file,
            boardId: String(router.query.boardID),
          },
        },
      });

      console.log(result.data?.updateBoard);
      router.push(`/community/${result.data?.updateBoard.boardId}`);
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
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      isActive={isActive}
    />
  );
}
