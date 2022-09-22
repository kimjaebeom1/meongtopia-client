import * as List from "./Community.List.styles";

export default function CommunityListPresenterPage(props: any) {
  return (
    <>
      <List.Wrapper>
        <List.Boxes>
          {props.data?.fetchBoards.map((el: any, i: number) => (
            <List.Box key={el.boardID}>
              {props.data?.fetchBoards[i]?.boardImg[i]?.url === "undefined" ? (
                <List.Img src="/images/newlogo.png" />
              ) : (
                <List.Img
                  src={`https://storage.googleapis.com/${el.boardImg[0]?.url}`}
                />
              )}

              <List.Title id={el.boardID} onClick={props.onClickMoveToDetail}>
                {el.title}
              </List.Title>
              <List.Nickname
                dangerouslySetInnerHTML={{ __html: el.user.nickname }}
              />
            </List.Box>
          ))}
        </List.Boxes>
      </List.Wrapper>
      <List.Wrap>
        <List.MoveToWrite onClick={props.onClickHome}>홈으로</List.MoveToWrite>
        <List.ButtonWrap>
          <List.Prev onClick={props.onClickPrev}>이전 페이지</List.Prev>
          <List.Next onClick={props.onClickNext}>다음 페이지</List.Next>
        </List.ButtonWrap>
        <List.MoveToWrite onClick={props.onClickMoveToWrite}>
          글쓰기
        </List.MoveToWrite>
      </List.Wrap>
    </>
  );
}
