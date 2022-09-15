import { MouseEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface ICafeContentsWriteUIProps {
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickCreateStore: (data: any) => Promise<void>;
  onClickUpdateStore: (data: any) => Promise<void>;

  register: UseFormRegister<FieldValues>;
  bigDog: number;
  smallDog: number;
  petArr: {
    petImgUrl: string;
    name: string;
    age: number;
    breed: string;
    description: string;
  };

  next: boolean;
  address: string;
  description: string;
  locationActive: string;
  conditionActive: string[];
  onClickLocationTag: (e: MouseEvent<HTMLDivElement>) => void;
  onClickConditionTag: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IIsActiveProps {
  isActive: boolean;
}
