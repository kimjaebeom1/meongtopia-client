import { Editor } from "@toast-ui/react-editor";
import { Dispatch, LegacyRef, MouseEvent, SetStateAction } from "react";

export interface ICafeContentsWriteUIProps {
  onClickNext: () => void;
  onClickPrev: () => void;
  next: boolean;
  isEdit: boolean;
  data?: any;
  files: never[];
  setFiles: Dispatch<SetStateAction<never[]>>;
  onChangeDescription: () => void;
  isOpen: boolean;
  petArr: never[];
  onChangeInputs: (event: any) => void;
  onChangeEntranceFee: (event: any) => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickCreateStore: (data: any) => Promise<void>;
  onClickUpdateStore: (data: any) => Promise<void>;
  onClickAddressModal: () => void;
  handleOk: () => void;
  closeModal: () => void;
  editorRef: LegacyRef<Editor>;
  fileUrls: string[];
  bigDog: number;
  smallDog: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  address: string;
  description: string;
  locationActive: string;
  conditionActive: string[];
  onClickLocationTag: (e: MouseEvent<HTMLDivElement>) => void;
  onClickConditionTag: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface ICafeContentsWriteProps {
  inputs: string | undefined;
  data?: any;
  isEdit: boolean;
  next: boolean;
  editorRef: LegacyRef<Editor>;
}

export interface IIsActiveProps {
  isActive: boolean;
}
