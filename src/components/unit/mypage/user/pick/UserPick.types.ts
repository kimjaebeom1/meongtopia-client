import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserPickUIProps {
  data?: Pick<IQuery, "fetchUser">;
  add: Number;
  onClickToReserve: (e: MouseEvent<HTMLDivElement>) => void;
  onClickAdd: () => void;
}
