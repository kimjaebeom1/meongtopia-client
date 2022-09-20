import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ICafeListUIProps {
  data?: Pick<IQuery, "fetchStores">;
  search: string;
  price: string;
  locationActive: string;
  conditionActive: string[];
  onClickLocationTag: (e: MouseEvent<HTMLDivElement>) => void;
  onClickConditionTag: (e: MouseEvent<HTMLDivElement>) => void;
  onClickConditionTagInit: () => void;
  onFetchMore: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToDetail: (e: MouseEvent<HTMLUListElement>) => void;
  onChangeOrder: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangePrice: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface IIsActiveProps {
  isActive: boolean;
}
