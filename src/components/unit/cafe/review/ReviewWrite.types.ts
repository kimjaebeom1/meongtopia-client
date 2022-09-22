import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IReviewWriteUIProps {
  data?: any;
  add: number;
  contents: string;
  isEdit: boolean;
  editReview: string;
  onClickWriteReview: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setRating: Dispatch<SetStateAction<number>>;
  onClickAdd: () => void;
  onClickEditIcon: () => void;
  onClickUpdateReview: () => void;
  onChangeReview: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteReview: () => void;
}
