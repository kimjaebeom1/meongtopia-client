import { useState, createRef } from "react";
import CafeContentsWriteUI from "./CafeContentsWrite.presenter";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_STORE } from "./CafeContentsWrite.queries";
import { Description } from "@material-ui/icons";
import Editor from "@toast-ui/editor";

export default function CafeContentsWrite() {
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [next, setNext] = useState(false);
  const [createStore] = useMutation(CREATE_STORE);
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const editorRef = createRef<Editor>();

  // 주소 관련
  const onCompleteAddressSearch = (data: any) => {
    setValue("address", data.address);
    trigger("address");

    setIsOpen(false);
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

  const { register, handleSubmit, setValue, trigger, getValues } = useForm({
    mode: "onChange",
  });

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    console.log("111");
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(newFileUrls);
  };

  const onClickPrev = () => {
    setNext(false);
  };

  const onClickNext = () => {
    setNext(true);
  };

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const onChangeDescription = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("description", inputs);
    trigger("description");
    console.log(Description);
  };

  const onClickCreateStore = async (data) => {
    const result = await createStore({
      variables: {
        name: data.name,
        phone: data.phone,
        storeImage: [...fileUrls],
        open: data.open,
        close: data.close,
        entranceFee: data.entranceFee,
        description: data.description,
        address: data.address,
        addressDetail: data.addressDetail,
        storeTag: [data.location],
        pet: {
          name: data.name,
          age: data.age,
          breed: data.breed,
          description: data.description,
        },
      },
    });
  };

  return (
    <CafeContentsWriteUI
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeLocation={onChangeLocation}
      register={register}
      handleSubmit={handleSubmit}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      onClickCreateStore={onClickCreateStore}
      onChangeDescription={onChangeDescription}
      location={location}
      next={next}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressModal={onClickAddressModal}
      handleOk={handleOk}
      closeModal={closeModal}
      address={getValues("address")}
      editorRef={editorRef}
    />
  );
}
