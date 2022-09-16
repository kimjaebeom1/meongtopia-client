import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER } from "../../../../commons/layout/header/Header.queries";
import DetailDogContentsUI from "./DogContents.presenter";
import {
  CREATE_RESERVATION,
  FETCH_STORE,
  Toggle_Pick,
} from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_USER);
  const { data, refetch } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
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
    (el: any) => el.store.storeID === router.query.cafeid
  );

  useEffect(() => {
    userData?.fetchUser.pick.filter(
      (el) => el.store.storeID === router.query.cafeid
    ).length === 1
      ? setPicked(true)
      : setPicked(false);
  }, [userData?.fetchUser.pick]);

  console.log(
    userData?.fetchUser.pick.filter(
      (el) => el.store.storeID === router.query.cafeid
    ).length === 1
  );
  const onClickToggle = async () => {
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
      ],
    });

    if (!picked) {
      setPicked(true);
    } else {
      setPicked(false);
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
      });
      alert("예약이 완료되었습니다");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  console.log(picked);
  return (
    <DetailDogContentsUI
      count={count}
      handleChange={handleChange}
      onClickReservation={onClickReservation}
      onChangePetCount={onChangePetCount}
      onClickToggle={onClickToggle}
      data={data}
      picked={picked}
    />
  );
}
