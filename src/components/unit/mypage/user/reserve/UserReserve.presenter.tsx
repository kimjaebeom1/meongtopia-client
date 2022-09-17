import * as UserReserve from "./UserReserve.styles";
import "antd/dist/antd.css";
import { IMyPageUserReserveUIProps } from "./UserReserve.types";

export default function MyPageUserReserveUI(props: IMyPageUserReserveUIProps) {
  return (
    <UserReserve.Wrapper>
      <UserReserve.PageTitle>예약 내역</UserReserve.PageTitle>
      {props.data?.fetchReservation
        .filter((_, i) => i < Number(props.add) * 2)
        .map((el) => (
          <UserReserve.ListWrapper key={el.resID}>
            <UserReserve.State>예약중</UserReserve.State>
            {el.store?.storeImg?.[0].url ? (
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
            <UserReserve.Cancel
              onClick={() => props.onClickCancel(el.store.storeID, el.date)}
            >
              취소하기
            </UserReserve.Cancel>
          </UserReserve.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.data?.fetchReservation[0] ? (
          Number(props.add) * 2 < props.data?.fetchReservation.length && (
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
