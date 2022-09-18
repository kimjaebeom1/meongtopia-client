import * as Detail from "./Community.Detail.styles";

export default function CommunityDetailPresenterPage(props) {
  console.log(props.data?.fetchBoard.boardImg[0].url);
  return (
    <Detail.Wrapper>
      <Detail.RowWrap>
        <Detail.Img
          src={`https://storage.googleapis.com/${props.data?.fetchBoard.boardImg[0].url}`}
        />
        <Detail.ContentsWrap>
          <Detail.Title>{props.data?.fetchBoard?.title}</Detail.Title>
          <Detail.Line />
          <Detail.Contents>{props.data?.fetchBoard?.contents}</Detail.Contents>
        </Detail.ContentsWrap>
      </Detail.RowWrap>
      <Detail.ButtonWrap>
        <Detail.Button onClick={props.onClickMoveToList}>
          목록으로
        </Detail.Button>
        <Detail.Button onClick={props.onClickMoveToUpdate}>
          수정하기
        </Detail.Button>
        <Detail.Button onClick={props.onClickDeleteBoard}>
          삭제하기
        </Detail.Button>
      </Detail.ButtonWrap>
    </Detail.Wrapper>
  );
}
