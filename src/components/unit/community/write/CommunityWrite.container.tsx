import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
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
import "antd/dist/antd.css";
import { FETCH_BOARD } from "../../../../../pages/community/[boardID]/edit";
import { useEffect } from "react";
import { ConsoleSqlOutlined } from "@ant-design/icons";
export default function CommunityContainerPage(props: any) {
  const { register, handleSubmit, setValue, trigger, reset } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    // console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  //이미지 URL api // 긴 이미지
  const onChangeImg = async (event: any) => {
    const ImageFile = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(ImageFile);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImageUrl(data.target?.result);
        setFile(data.target?.result);
      }
    };

    try {
      const result = await uploadFile({ variables: { files: ImageFile } });
      setFile(result.data?.uploadFile);
    } catch (error) {
      if (error instanceof Error) {
        getErrorMessage(error);
      }
    }
  };

  // 등록하기
  const onClickSubmit = async (data: any) => {
    if (!data.title) {
      Modal.error({
        content: "제목을 입력해주세요",
      });
      return;
    }

    if (!file) {
      Modal.error({
        content: "이미지를 넣어주세요",
      });
      return;
    }

    if (!data.contents) {
      Modal.error({
        content: "내용을 입력해주세요",
      });
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
      // console.log(result.data?.createBoard);
      router.push(`/community/${result.data?.createBoard.boardID}`);
    } catch (error) {
      if (error instanceof Error) {
        getErrorMessage(error);
      }
    }
  };

  // 수정하기
  const onClickUpdate = async (data: any) => {
    if (typeof router.query.boardID !== "string") return;

    const updateBoardInputs: IUpdateBoardInput = {};
    if (data.title !== "") updateBoardInputs.title = data.title;
    if (data.contents !== "") updateBoardInputs.contents = data.contents;
    if (file !== "") updateBoardInputs.file = file;

    if (
      !updateBoardInputs.title &&
      !updateBoardInputs.contents &&
      !updateBoardInputs.file
    ) {
      Modal.error({
        content: " 수정한 내용이 없습니다",
      });
      return;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title: updateBoardInputs.title,
            contents: updateBoardInputs.contents,
            boardImg: updateBoardInputs.file,
          },
          boardID: String(router.query.boardID),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardID: router.query.boardID },
          },
        ],
      });

      router.push(`/community/${result.data?.updateBoard.boardID}`);
    } catch (error) {
      if (error instanceof Error) {
        getErrorMessage(error);
      }
    }
  };

  useEffect(() => {
    if (!props.data?.fetchBoard.boardImg.length) {
      setImageUrl(file);
    }
  }, [props.data]);

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
      imageUrl={imageUrl}
      data={props.data}
      file={file}
    />
  );
}
