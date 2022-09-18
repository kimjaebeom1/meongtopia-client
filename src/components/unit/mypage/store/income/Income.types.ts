import { MouseEvent } from "react";

export interface IMyPageStoreInComeUIProps {
  data?: any;
  onClickToStore: (e: MouseEvent<HTMLDivElement>) => void;
}
