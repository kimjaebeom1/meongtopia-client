import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserReserveUIProps {
  data?: Pick<IQuery, "fetchReservation">;
  add: Number;
  onClickCancel: (storeID: string, date: string) => void;
  onClickAdd: () => void;
}
