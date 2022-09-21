import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import { FETCH_STORES } from "../../list/CafeList.queries";
import DetailDogContentsUI from "./DogContents.presenter";
import {
  CREATE_RESERVATION,
  FETCH_RESERVATION,
  FETCH_STORE,
  FETCH_USER_RESERVATION,
  REVIEW_COUNT,
  Toggle_Pick,
} from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
  const { data: reservationData } = useQuery(FETCH_RESERVATION);
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

  const handleChange = (value: number) => {
    setCount(value);
  };

  const pick = userData?.fetchUser.pick.filter(
    (el: any) => el.store?.storeID === router.query.cafeid
  );

  useEffect(() => {
    userData?.fetchUser.pick.filter(
      (el: any) => el.store?.storeID === router.query.cafeid
    ).length === 1
      ? setPicked(true)
      : setPicked(false);
  }, []);

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
            query: FETCH_USER_RESERVATION,
          },
        ],
      });
      if (window.confirm("예약하시겠습니까?")) {
        alert("예약 되었습니다.");
        router.push("/mypage/user/reserve/");
      } else {
        alert("취소 되었습니다.");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const userResID = userReservationData?.fetchUserReservation.map(
    (el: any) => el.resID
  );
  const storeResID = data?.fetchStore.reservation.map((el: any) => el.resID);

  const checkReservation = userResID?.filter((el: any) =>
    storeResID?.includes(el)
  );

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
    />
  );
}
