import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import DetailDogContentsUI from "./DogContents.presenter";
import {
  CREATE_RESERVATION,
  FETCH_STORE,
  Toggle_Pick,
} from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
  const [createReservation] = useMutation(CREATE_RESERVATION);
  const [count, setCount] = useState(1);
  const [petCount, setPetCount] = useState(0);
  const [togglepick] = useMutation(Toggle_Pick);
  const onChangePetCount = (value: number) => {
    setPetCount(value);
  };

  const handleChange = (value: number) => {
    setCount(value);
  };

  const onClickToggle = async () => {
    const result = await togglepick({
      variables: {
        storeID: router.query.cafeid,
      },
    });
    console.log(result);
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

  return (
    <DetailDogContentsUI
      count={count}
      handleChange={handleChange}
      onClickReservation={onClickReservation}
      onChangePetCount={onChangePetCount}
      onClickToggle={onClickToggle}
      data={data}
    />
  );
}
