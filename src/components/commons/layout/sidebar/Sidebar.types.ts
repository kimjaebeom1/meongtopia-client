import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyPageSidebarUIProps {
  onClickUpdate: () => void;
  onClickLogout: () => void;
  data: Pick<IQuery, "fetchUser">;
}
