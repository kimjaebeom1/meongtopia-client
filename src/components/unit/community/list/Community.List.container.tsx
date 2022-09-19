import { useQuery } from "@apollo/client";
import CommunityListPresenterPage from "./Community.List.presenter";
import { FETCH_BOARDS } from "./Community.List.queries";

export default function CommunityListContainerPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el.boardID}>{el.title}</div>
      ))}
    </>
  );
  // <CommunityListPresenterPage data={data} />;
}
