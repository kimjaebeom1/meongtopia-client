import CommunityContainerPage from "../../../../src/components/unit/community/write/CommunityWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      boardID
      title
      contents
      boardImg {
        url
      }
    }
  }
`;

export default function CommunityEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: String(router.query.boardID) },
  });

  // console.log(data?.fetchBoard.title);
  // console.log(data?.fetchBoard.contents);
  // console.log(data?.fetchBoard.boardImg[0]?.url);

  return <CommunityContainerPage isEdit={true} data={data} />;
}
