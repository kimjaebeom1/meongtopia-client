import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailDogContentsUI from "./DogContents.presenter";
import { FETCH_STORE } from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });

  console.log(data);

  return <DetailDogContentsUI data={data} />;
}
