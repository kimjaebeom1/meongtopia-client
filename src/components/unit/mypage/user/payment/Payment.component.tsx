import { useMutation, useQuery } from "@apollo/client";
import Script from "next/script";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePaymentArgs,
  IQuery,
} from "../../../../../commons/types/generated/types";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import { CREATE_PAYMENT } from "./Payment.queries";
import * as Payment from "./Payment.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentComponent() {
  const [amount, setAmount] = useState(0);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [createPayment] = useMutation<
    Pick<IMutation, "createPayment">,
    IMutationCreatePaymentArgs
  >(CREATE_PAYMENT);

  const onClickAmount = (e: MouseEvent<HTMLDivElement>) => {
    setAmount(Number((e.target as HTMLDivElement).id));
  };

  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    // IMP.init("imp06461023");
    IMP.init("imp04533111"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        // pg: "nice",
        // pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `포인트 ${amount}원 충전`,
        amount,
        buyer_email: data?.fetchUser.email,
        buyer_name: data?.fetchUser.name,
        buyer_tel: data?.fetchUser.phone,
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // console.log(rsp);
          const result = createPayment({
            variables: {
              impUid: rsp.imp_uid,
              amount: rsp.paid_amount,
            },
          });
          // console.log(result);
          location.reload();
        } else {
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };
  return (
    <>
      {/* <!-- jQuery --> */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <Payment.Wrapper>
        <Payment.Container>
          <Payment.Title>충전하실 금액을 선택해주세요!</Payment.Title>
          <Payment.List id="100" onClick={onClickAmount}>
            100원(테스트)
          </Payment.List>
          <Payment.List id="5000" onClick={onClickAmount}>
            5,000원
          </Payment.List>
          <Payment.List id="10000" onClick={onClickAmount}>
            10,000원
          </Payment.List>
          <Payment.List id="30000" onClick={onClickAmount}>
            30,000원
          </Payment.List>
          <Payment.List id="50000" onClick={onClickAmount}>
            50,000원
          </Payment.List>
          <Payment.List id="100000" onClick={onClickAmount}>
            100,000원
          </Payment.List>
          <Payment.Title>
            충전하실 금액 : {amount.toLocaleString()}원
          </Payment.Title>
          <Payment.Btn onClick={onClickCharge}>충전하기</Payment.Btn>
        </Payment.Container>
      </Payment.Wrapper>
    </>
  );
}
