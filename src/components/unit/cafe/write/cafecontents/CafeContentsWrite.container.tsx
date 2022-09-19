import { useState, createRef, useEffect, MouseEvent } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE, UPDATE_STORE } from "./CafeContentsWrite.queries";
import Editor from "@toast-ui/editor";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  bigDogState,
  petArrState,
  smallDogState,
} from "../../../../../commons/store";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { schema } from "../../../../../commons/libraries/validation";
import { IUpdateStoreInput } from "../../../../../commons/types/generated/types";

const initialInputs = {
  name: "",
  phone: "",
  open: "",
  close: "",
  addressDetail: "",
  address: "",
};

export default function CafeContentsWrite(props) {
  const [locationActive, setLocationActive] = useState("");
  const [conditionActive, setConditionActive] = useState([""]);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [inputs, setInputs] = useState(initialInputs);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [updateStore] = useMutation(UPDATE_STORE);
  const [isOpen, setIsOpen] = useState(false);
  const [petArr] = useRecoilState(petArrState);
  const [bigDog] = useRecoilState(bigDogState);
  const [smallDog] = useRecoilState(smallDogState);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState([]);
  const [entranceFee, setEntranceFee] = useState(0);

  const onChangeInputs = (event: any) => {
    const _inputs = {
      ...inputs,
      [event?.target.id]: event?.target.value,
    };
    setInputs(_inputs);
  };

  const onChangeEntranceFee = (event) => {
    setEntranceFee(event.target.value);
  };

  // 주소 관련
  const onCompleteAddressSearch = (data: any) => {
    setIsOpen(false);
    setAddress(data.address);
  };

  const onClickAddressModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const editorRef = createRef<Editor>();

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setDescription(inputs);
  };

  const onClickCreateStore = async () => {
    if (!petArr.join()) return alert("강아지 정보를 추가해주세요!");
    if (!bigDog || !smallDog) return alert("강아지 수를 입력해주세요!");

    try {
      const result = await createStore({
        variables: {
          createStoreInput: {
            ...inputs,
            address,
            description: description,
            entranceFee: Number(entranceFee),
            storeImg: fileUrls.join().split(","),
            bigDog: Number(bigDog),
            smallDog: Number(smallDog),
            locationTag: locationActive,
            storeTag: conditionActive,
            pet: [...petArr],
          },
        },
      });
      alert("게시글 생성이 완료되었습니다.");
      router.push(`/cafe/${result.data.createStore.storeID}`);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert("등록 실패");
    }
  };

  const onClickUpdateStore = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchStore.storeImg);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateStoreInput: IUpdateStoreInput = {};
    if (inputs.name) updateStoreInput.name = inputs.name;
    if (inputs.phone) updateStoreInput.phone = inputs.phone;
    if (inputs.open) updateStoreInput.open = inputs.open;
    if (inputs.close) updateStoreInput.close = inputs.close;
    if (address) updateStoreInput.address = address;
    if (inputs.addressDetail)
      updateStoreInput.addressDetail = inputs.addressDetail;
    if (description) updateStoreInput.description = description;
    if (entranceFee) updateStoreInput.entranceFee = Number(entranceFee);
    if (bigDog) updateStoreInput.bigDog = Number(bigDog);
    if (smallDog) updateStoreInput.smallDog = Number(smallDog);
    if (locationActive) updateStoreInput.locationTag = locationActive;
    if (conditionActive) updateStoreInput.storeTag = conditionActive;
    if (petArr) updateStoreInput.pet = [...petArr];
    if (isChangedFiles) updateStoreInput.storeImg = fileUrls.join().split(",");

    try {
      const result = await updateStore({
        variables: {
          storeID: router.query.cafeid,
          updateStoreInput,
        },
      });
      console.log(result);
      alert("게시글 수정이 완료되었습니다.");
      router.push(`/cafe/${result.data.updateStore.storeID}`);
    } catch (error) {
      if (error instanceof Error) alert("수정 실패");
    }
  };

  const onClickLocationTag = (e: MouseEvent<HTMLDivElement>) => {
    setLocationActive((e.target as HTMLDivElement).id);
  };

  const onClickConditionTag = (e: MouseEvent<HTMLDivElement>) => {
    if (conditionActive.includes((e.target as HTMLDivElement).id)) {
      setConditionActive(
        conditionActive.filter((el) => el !== (e.target as HTMLDivElement).id)
      );
    } else
      setConditionActive((prev) => [...prev, (e.target as HTMLDivElement).id]);
  };

  const onClickPrev = () => {
    setNext(false);
  };

  const onClickNext = () => {
    if (
      // formState.isValid === false ||
      !description ||
      description === "<p><br></p>" ||
      !fileUrls.join("") ||
      !locationActive ||
      !conditionActive.join()
    ) {
      alert("값을 입력해주세요");
      return;
    }
    setNext(true);
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchStore.storeImg.length) {
      setFileUrls([...props.data?.fetchStore.storeImg.map((el) => el.url)]);
    }

    const html = props.data?.fetchStore.description;
    editorRef.current?.getInstance().setHTML(html);

    if (props.data?.fetchStore.storeTag.length)
      setConditionActive(props.data?.fetchStore.storeTag.map((el) => el.name));

    if (props.data?.fetchStore.locationTag.name)
      setLocationActive(props.data?.fetchStore.locationTag.name);
  }, [props.data]);

  console.log(props.data);

  return (
    <CafeContentsWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickCreateStore={onClickCreateStore}
      onChangeDescription={onChangeDescription}
      next={next}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressModal={onClickAddressModal}
      handleOk={handleOk}
      closeModal={closeModal}
      editorRef={editorRef}
      description={description}
      locationActive={locationActive}
      conditionActive={conditionActive}
      onClickLocationTag={onClickLocationTag}
      onClickConditionTag={onClickConditionTag}
      bigDog={bigDog}
      smallDog={smallDog}
      isEdit={props.isEdit}
      data={props.data}
      files={files}
      setFiles={setFiles}
      onClickUpdateStore={onClickUpdateStore}
      petArr={petArr}
      onChangeInputs={onChangeInputs}
      onChangeEntranceFee={onChangeEntranceFee}
      address={address}
    />
  );
}
