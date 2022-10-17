export interface ICommunityListProps {
  data: any;
  onClickPage: (event: any) => void;
  onClickMoveToWrite: () => void;
  onClickMoveToDetail: (event: any) => void;
  onClickHome: () => void;
  startPage: number;
  lastPage: number;
  isActivePage: number;
}
