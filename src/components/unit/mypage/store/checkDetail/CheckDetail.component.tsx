import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_OWNER_STORES } from "../mycafe/MyCafe.queries";
import * as CheckDetail from "./CheckDetail.styles";

const STATE = ["예약중", "예약취소", "사용완료", "기간만료"];

export default function MyPageStoreCheckDetail() {
  const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchOwnerStores">>(FETCH_OWNER_STORES);

  const storeData = data?.fetchOwnerStores.filter(
    (el) => el.storeID === router.query.checkID
  )[0];

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
    <CheckDetail.Wrapper>
      <CheckDetail.PageTitle>예약 확인</CheckDetail.PageTitle>
      <CheckDetail.TitleWrapper>
        <CheckDetail.Title>{storeData?.name}</CheckDetail.Title>
      </CheckDetail.TitleWrapper>

      {storeData?.reservation.length === 0 ? (
        <CheckDetail.Title style={{ marginTop: "5rem" }}>
          예약 내역이 없습니다.
        </CheckDetail.Title>
      ) : (
        <CheckDetail.ListWrapper>
          {storeData?.reservation.map((el, i) => (
            <CheckDetail.ListContainer>
              <div>no. {i + 1}</div>
              <div>
                <span>예약자: </span>
                {el.user.nickname}
              </div>
              <div>
                <span>예약날짜: </span>
                {el.date}
              </div>
              <div>
                <span>예약인원: </span>
                {el.members}
              </div>
              <div>
                <span>예약금액: </span>
                {el.amount.toLocaleString() + "원"}
              </div>
              <div>
                <span>애견동반 수: </span>
                {el.pets}
              </div>
              <div>
                <span>예약상태: </span>
                {stateFunc(el.state)}
              </div>
            </CheckDetail.ListContainer>
          ))}
        </CheckDetail.ListWrapper>
      )}
    </CheckDetail.Wrapper>
  );
}
