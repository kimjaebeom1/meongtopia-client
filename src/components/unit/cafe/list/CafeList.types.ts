import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICafeListUIProps {
  data: Pick<IQuery, "fetchStores">;
  locationActive: string;
  conditionActive: string[];
  onClickLocationTag: (e: MouseEvent<HTMLDivElement>) => void;
  onClickConditionTag: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IIsActiveProps {
  isActive: boolean;
}
