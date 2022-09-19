import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserReserveUIProps {
  reserveData?: any;
  cancelData?: Pick<IQuery, "fetchCancelReservation">;
  add: Number;
  onClickCancel: (storeID: string, date: string) => void;
  onClickAdd: () => void;
}
