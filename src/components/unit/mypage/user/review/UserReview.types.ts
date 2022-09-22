import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserReviewUIProps {
  data?: Pick<IQuery, "fetchUserBoards">;
  add: Number;
  onClickToDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickAdd: () => void;
}
