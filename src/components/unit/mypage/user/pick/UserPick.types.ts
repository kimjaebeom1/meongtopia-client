import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IMyPageUserPickUIProps {
  data?: Pick<IQuery, "fetchPicks">;
  onClickToReserve: (e: MouseEvent<HTMLDivElement>) => void;
}
