import * as Income from "./Income.styles";
import { v4 as uuidv4 } from "uuid";
import { IMyPageStoreInComeUIProps } from "./Income.types";

const TABLE_HEAD = ["일일 결제건수", "일일 취소건수", "일일 총수입"];

export default function MyPageStoreInComeUI(props: IMyPageStoreInComeUIProps) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return (
    <Income.Wrapper>
      <Income.PageTitle>수입 내역</Income.PageTitle>
      <Income.TitleWrapper>
        <Income.Title>내 카페 리스트</Income.Title>
        <div>{`Today: ${yyyy} / ${mm} / ${dd}`}</div>
      </Income.TitleWrapper>
      <Income.ListWrapper>
        <Income.ListTable>
          <Income.TableRow>
            <Income.HeadName>카페 이름</Income.HeadName>

            {TABLE_HEAD.map((el) => (
              <Income.Head key={uuidv4()}>{el}</Income.Head>
            ))}
          </Income.TableRow>

          {props.data?.fetchIncomes
            .filter((el: []) => el.length)
            .map((el: any) => el[0])
            .map((el: any) => (
              <Income.TableRow>
                <Income.DateName>{el.store.name}</Income.DateName>
                <Income.Date>{el.paymentNum}</Income.Date>
                <Income.Date>{el.cancelNum}</Income.Date>
                <Income.Date>{`${el.totalCash.toLocaleString()}원`}</Income.Date>
              </Income.TableRow>
            ))}
        </Income.ListTable>
      </Income.ListWrapper>
    </Income.Wrapper>
  );
}
