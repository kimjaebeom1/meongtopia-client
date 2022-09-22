import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserReserveUIProps {
  reserveData?: Pick<IQuery, "fetchUserReservation">;
  cancelData?: Pick<IQuery, "fetchCancelReservation">;
  add: Number;
  onClickCancel: (storeID: string, date: string) => void;
  onClickAdd: () => void;
  onClickToDetail: (e: MouseEvent<HTMLUListElement>) => void;
}
