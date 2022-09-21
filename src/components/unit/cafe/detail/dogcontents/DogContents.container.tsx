import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import { FETCH_USER_RESERVATION } from "../../../mypage/user/reserve/UserReserve.queries";
import { FETCH_STORES } from "../../list/CafeList.queries";
import DetailDogContentsUI from "./DogContents.presenter";
import {
  CREATE_RESERVATION,
  FETCH_STORE,
  REVIEW_COUNT,
  Toggle_Pick,
} from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
  const { data: reviewCount } = useQuery(REVIEW_COUNT, {
    variables: { storeID: router.query.cafeid },
  });
  const { data: userReservationData } = useQuery(FETCH_USER_RESERVATION);
  const [createReservation] = useMutation(CREATE_RESERVATION);
  const [count, setCount] = useState(1);
  const [petCount, setPetCount] = useState(0);
  const [togglePick] = useMutation(Toggle_Pick);
  const onChangePetCount = (value: number) => {
    setPetCount(value);
  };
  const [picked, setPicked] = useState(false);
  const [reservation, setReservation] = useState(false);

  const handleChange = (value: number) => {
    setCount(value);
  };

  const pick = userData?.fetchUser.pick.filter(
    (el: any) => el.store?.storeID === router.query.cafeid
  );

  // 토글
  useEffect(() => {
    userData?.fetchUser.pick.filter(
      (el: any) => el.store?.storeID === router.query.cafeid
    ).length === 1
      ? setPicked(true)
      : setPicked(false);
  }, []);

  // 예약 내역
  const userResID = userReservationData?.fetchUserReservation.map(
    (el: any) => el.resID
  );
  const storeResID = data?.fetchStore.reservation.map((el: any) => el.resID);

  const checkReservation = userResID?.filter((el: any) =>
    storeResID?.includes(el)
  );

  // 토글
  const onClickToggle = async () => {
    try {
      await togglePick({
        variables: {
          storeID: String(router.query.cafeid),
        },

        refetchQueries: [
          {
            query: FETCH_STORE,
            variables: { StoreID: router.query.cafeid },
          },
          {
            query: FETCH_USER,
          },
          {
            query: FETCH_STORES,
          },
        ],
      });

      if (!picked) {
        setPicked(true);
      } else {
        setPicked(false);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickReservation = async () => {
    const reserve = confirm("예약하시겠습니까?");
    if (!reserve) return alert("취소 되었습니다.");
    try {
      const result = await createReservation({
        variables: {
          storeID: router.query.cafeid,
          createReservationInput: {
            members: Number(count),
            amount: data?.fetchStore.entranceFee * count,
            pets: Number(petCount),
          },
        },
        refetchQueries: [
          {
            query: FETCH_STORE,
            variables: { StoreID: router.query.cafeid },
          },
          {
            query: FETCH_USER_RESERVATION,
          },
          {
            query: FETCH_USER,
          },
        ],
      });
      await router.push("/mypage/user/reserve/");
      checkReservation?.length === 1 || userData?.fetchUser.role === "OWNER"
        ? setReservation(true)
        : setReservation(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 예약하기
  useEffect(() => {
    console.log(checkReservation);
    console.log(userData?.fetchUser.role);

    if (checkReservation?.length === 1) {
      setReservation(true);
    } else {
      setReservation(false);
    }
  }, []);

  return (
    <DetailDogContentsUI
      count={count}
      handleChange={handleChange}
      onClickReservation={onClickReservation}
      onChangePetCount={onChangePetCount}
      onClickToggle={onClickToggle}
      data={data}
      picked={picked}
      reviewCount={reviewCount}
      userData={userData}
      checkReservation={checkReservation}
      reservation={reservation}
    />
  );
}
