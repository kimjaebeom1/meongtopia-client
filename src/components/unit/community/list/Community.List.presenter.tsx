import * as List from "./Community.List.styles";

export default function CommunityListPresenterPage(props: any) {
  return (
    <>
      <List.Wrapper>
        <List.Boxes>
          {props.data?.fetchBoards
            // .filter((_: any, i: number) => i < Number(props.page) * 3)
            .map((el: any) => (
              <List.Box key={el.boardID}>
                <List.Img
                  src={`https://storage.googleapis.com/${el.boardImg[0]?.url}`}
                  // onError={onError}
                />
                <List.Title id={el.boardID} onClick={props.onClickMoveToDetail}>
                  {el.title}
                </List.Title>
                <List.Nickname
                  dangerouslySetInnerHTML={{ __html: el.contents }}
                />
              </List.Box>
            ))}
        </List.Boxes>
      </List.Wrapper>
      <List.Wrap>
        <List.MoveToWrite>홈으로</List.MoveToWrite>
        <List.ButtonWrap>
          <List.Prev onClick={props.onClickPrev}>이전 페이지</List.Prev>
          <List.Next onClick={props.onClickNext}>다음 페이지</List.Next>
        </List.ButtonWrap>
        <List.MoveToWrite>글쓰기</List.MoveToWrite>
      </List.Wrap>
    </>
  );
}
