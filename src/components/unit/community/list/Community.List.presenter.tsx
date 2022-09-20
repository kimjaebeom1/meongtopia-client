import * as List from "./Community.List.styles";

export default function CommunityListPresenterPage(props: any) {
  // const [startPage, setStartPage] = useState(1);
  // const lastPage = Math.ceild(data.fetchBoards.a)

  const onError = (event: any) => {
    event.target.src = "/images/listlogo.png";
  };

  return (
    <List.Wrapper>
      {props.data?.fetchBoards.map((el: any) => (
        <List.Box key={el.boardID}>
          <List.Img
            src={`https://storage.googleapis.com/${el.boardImg[0]?.url}`}
            onError={onError}
          />
          <List.Title id={el.boardID} onClick={props.onClickMoveToDetail}>
            {el.title}
          </List.Title>
          <List.Nickname>{el.user.nickname}</List.Nickname>
        </List.Box>
      ))}
      {/* {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <span onClick={props.onClickPage} id={String(el)} key={el}>
          {`${el}`}
        </span>
      ))} */}

      {/* {new Array(10).fill(1).map((_, index) => (
        <List.Num
          onClick={onClickPage}
          id={String(index + startPage)}
          key={index + startPage}
        >
          {`${index + startPage}`}
        </List.Num>
      ))} */}
    </List.Wrapper>
  );
}
