import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserReserveUIProps {
  reserveData?: Pick<IQuery, "fetchReservation">;
  cancelData?: any;
  add: Number;
  onClickCancel: (storeID: string, date: string) => void;
  onClickAdd: () => void;
}
