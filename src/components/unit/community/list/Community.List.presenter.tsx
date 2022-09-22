import * as List from "./Community.List.styles";
import { ICommunityListProps } from "./Community.List.types";

export default function CommunityListPresenterPage(props: ICommunityListProps) {
  return (
    <List.Container>
      <List.Wrapper>
        {props.data?.fetchBoards.map((el: any) => (
          <List.Box key={el.boardID}>
            <List.Img
              src={`https://storage.googleapis.com/${el.boardImg[0]?.url}`}
            />
            <List.Title id={el.boardID} onClick={props.onClickMoveToDetail}>
              {el.title}
            </List.Title>
            <List.Contents dangerouslySetInnerHTML={{ __html: el.contents }} />
          </List.Box>
        ))}
      </List.Wrapper>

      <List.Wrap>
        <List.MoveToWrite onClick={props.onClickHome}>홈으로</List.MoveToWrite>
        <List.ButtonWrap>
          <List.Prev onClick={props.onClickPrevBtn} />
          <List.Boxes>
            {new Array(6).fill(1).map((_, index: number) => (
              <List.PageNum
                id={String(index + props.startPage)}
                key={index + props.startPage}
                onClick={props.onClickPage}
                isActive={props.startPage + index === props.isActivePage}
              >
                {`${index + 1}`}
              </List.PageNum>
            ))}
          </List.Boxes>
          <List.Next onClick={props.onClickNextBtn} />
        </List.ButtonWrap>
        <List.MoveToWrite onClick={props.onClickMoveToWrite}>
          글쓰기
        </List.MoveToWrite>
      </List.Wrap>
    </List.Container>
  );
}
