import * as Detail from "./Community.Detail.styles";

export default function CommunityDetailPresenterPage(props) {
  console.log(props.data?.fetchBoard.boardImg[0].url);
  return (
    // <>
    //   <div>제목:{props.data?.fetchBoard?.title}</div>
    //   <div>내용:{props.data?.fetchBoard?.contents}</div>
    //   <img
    //     style={{ width: "300px", height: "300px" }}
    //     src={`https://storage.googleapis.com/${props.data?.fetchBoard.boardImg[0].url}`}
    //   />
    //   <div>목록으로</div>
    //   <div>수정하기</div>
    //   <div onClick={props.onClickDeleteBoard}> 삭제하기</div>
    // </>

    <Detail.Wrapper>
      <Detail.RowWrap>
        <Detail.Img
          src={`https://storage.googleapis.com/${props.data?.fetchBoard.boardImg[0].url}`}
        />
        <Detail.ContentsWrap>
          <Detail.Title>{props.data?.fetchBoard?.title}</Detail.Title>
          <Detail.Contents>{props.data?.fetchBoard?.contents}</Detail.Contents>
        </Detail.ContentsWrap>
      </Detail.RowWrap>
      <Detail.ButtonWrap>
        <Detail.Button>목록으로</Detail.Button>
        <Detail.Button>수정하기</Detail.Button>
        <Detail.Button>삭제하기</Detail.Button>
      </Detail.ButtonWrap>
    </Detail.Wrapper>
  );
}
