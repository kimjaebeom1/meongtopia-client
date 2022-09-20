import * as UserReserve from "./UserReserve.styles";
import "antd/dist/antd.css";
import { IMyPageUserReserveUIProps } from "./UserReserve.types";

const STATE = ["예약중", "예약취소", "사용완료", "기간만료"];

export default function MyPageUserReserveUI(props: IMyPageUserReserveUIProps) {
  const stateFunc = (data: string) => {
    const temp = data;
    if (temp === "PENDING") {
      return STATE[0];
    }
    if (temp === "CANCEL") {
      return STATE[1];
    }
    if (temp === "USED") {
      return STATE[2];
    }
    if (temp === "EXPIRED") {
      return STATE[3];
    }
  };

  return (
    <UserReserve.Wrapper>
      <UserReserve.PageTitle>예약 내역</UserReserve.PageTitle>
      {props.reserveData?.fetchUserReservation
        .filter((_: any, i: number) => i < Number(props.add) * 2)
        .map((el: any) => (
          <UserReserve.ListWrapper key={el.resID}>
            <UserReserve.State>{stateFunc(el.state)}</UserReserve.State>
            {el.store.storeImg[0] ? (
              <UserReserve.Img
                src={`https://storage.googleapis.com/${el.store?.storeImg?.[0].url}`}
              />
            ) : (
              <UserReserve.Img src="/images/dogcharacter.jpg" />
            )}
            <UserReserve.UserList>
              <UserReserve.ContentsText>
                <UserReserve.Title>{el.store.name}</UserReserve.Title>
              </UserReserve.ContentsText>
              <UserReserve.Date>{`예약일: ${el.date}`}</UserReserve.Date>
              <UserReserve.ContentsText>
                <span>성인 입장료</span>
                <span>{el.store.entranceFee}원</span>
              </UserReserve.ContentsText>
              <UserReserve.ContentsText>
                <span>{`성인 ${el.members}명`}</span>
                <span>{`X ${el.members}`}</span>
              </UserReserve.ContentsText>
              <UserReserve.Horizon />
              <UserReserve.ContentsText>
                <span>총 합계</span>
                <span>{`${el.amount}원`}</span>
              </UserReserve.ContentsText>
            </UserReserve.UserList>
            {stateFunc(el.state) === "예약취소" ? (
              <div></div>
            ) : (
              <UserReserve.Cancel
                onClick={() => props.onClickCancel(el.store.storeID, el.date)}
              >
                취소하기
              </UserReserve.Cancel>
            )}
          </UserReserve.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.reserveData?.fetchUserReservation[0] ? (
          Number(props.add) * 2 <
            props.reserveData?.fetchUserReservation.length && (
            <UserReserve.AddBtn onClick={props.onClickAdd}>
              더보기
            </UserReserve.AddBtn>
          )
        ) : (
          <h2>예약 내역이 없습니다.</h2>
        )}
      </div>
    </UserReserve.Wrapper>
  );
}
