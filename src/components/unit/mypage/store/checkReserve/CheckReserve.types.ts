import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageStoreCheckReserveUIProps {
  data?: Pick<IQuery, "fetchOwnerStores">;
  onClickToStore: (e: MouseEvent<HTMLDivElement>) => void;
}
