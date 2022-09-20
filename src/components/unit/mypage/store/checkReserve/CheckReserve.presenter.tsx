import * as CheckReserve from "./CheckReserve.styles";
import { v4 as uuidv4 } from "uuid";
import { IMyPageStoreCheckReserveUIProps } from "./CheckReserve.types";

const TABLE_HEAD = ["총 예약 수", "총 예약 금액", "총 예약 인원"];

export default function MyPageStoreCheckReserveUI(
  props: IMyPageStoreCheckReserveUIProps
) {
  const data = props.data?.fetchOwnerStores.map((el) => el.reservation);

  const reserve = data?.map((el) => el.map((el) => el.amount));
  const sumReserve = reserve?.map((el) =>
    el ? el.reduce((sum, cur) => sum + cur, 0) : 0
  );

  const members = data?.map((el) => el.map((el) => el.members));
  const sumMembers = members?.map((el) =>
    el ? el.reduce((sum, cur) => sum + cur, 0) : 0
  );

  return (
    <CheckReserve.Wrapper>
      <CheckReserve.PageTitle>예약 확인</CheckReserve.PageTitle>
      <CheckReserve.TitleWrapper>
        <CheckReserve.Title>내 카페 리스트</CheckReserve.Title>
      </CheckReserve.TitleWrapper>
      <CheckReserve.ListWrapper>
        <CheckReserve.ListTable>
          <CheckReserve.TableRow>
            <CheckReserve.HeadName>카페 이름</CheckReserve.HeadName>
            {TABLE_HEAD.map((el) => (
              <CheckReserve.Head key={uuidv4()}>{el}</CheckReserve.Head>
            ))}
          </CheckReserve.TableRow>

          <CheckReserve.DataRow>
            <CheckReserve.DataColumn>
              {props.data?.fetchOwnerStores.map((el) => (
                <CheckReserve.CafeRow key={uuidv4()}>
                  <CheckReserve.DataName
                    id={el.storeID}
                    onClick={props.onClickToStore}
                  >
                    {el.name}
                  </CheckReserve.DataName>
                  <CheckReserve.Data>{el.reservation.length}</CheckReserve.Data>
                </CheckReserve.CafeRow>
              ))}
            </CheckReserve.DataColumn>
            <CheckReserve.SumColumn>
              {sumReserve?.map((el) => (
                <CheckReserve.CafeRow key={uuidv4()}>
                  <CheckReserve.Data>
                    {el.toLocaleString() + "원"}
                  </CheckReserve.Data>
                </CheckReserve.CafeRow>
              ))}
            </CheckReserve.SumColumn>

            <CheckReserve.SumColumn>
              {sumMembers?.map((el) => (
                <CheckReserve.MembersRow key={uuidv4()}>
                  <CheckReserve.Data>{el}</CheckReserve.Data>
                </CheckReserve.MembersRow>
              ))}
            </CheckReserve.SumColumn>
          </CheckReserve.DataRow>
        </CheckReserve.ListTable>
      </CheckReserve.ListWrapper>
    </CheckReserve.Wrapper>
  );
}
