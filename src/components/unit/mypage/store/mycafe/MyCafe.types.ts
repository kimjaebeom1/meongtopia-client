import { MouseEvent } from "react";

export interface IMyPageStoreMyCafeUIProps {
  data?: any;
  add: Number;
  onClickAdd: () => void;
  onClickToDetail: (e: MouseEvent<HTMLUListElement>) => void;
  onClickToEdit: (e: MouseEvent<HTMLDivElement>) => void;
  onClickDelete: (e: MouseEvent<HTMLDivElement>) => void;
}
