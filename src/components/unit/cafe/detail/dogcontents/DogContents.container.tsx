import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import DetailDogContentsUI from "./DogContents.presenter";
import { CREATE_RESERVATION, FETCH_STORE } from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
  const [createReservation] = useMutation(CREATE_RESERVATION);
  console.log(data?.fetchStore.pet);
  const [count, setCount] = useState(1);

  // const StoreImage = data?.fetchStore?.storeImg.url.split(",");

  const handleChange = (value: number) => {
    setCount(value);
  };

  const onClickReservation = async () => {
    const result = await createReservation({
      variables: {
        storeID: router.query.cafeid,
        createReservationInput: {
          members: Number(count),
          amount: data?.fetchStore.entranceFee * count,
        },
      },
    });
  };

  return (
    <DetailDogContentsUI
      count={count}
      handleChange={handleChange}
      onClickReservation={onClickReservation}
      data={data}
    />
  );
}
