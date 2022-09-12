import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailDogContentsUI from "./DogContents.presenter";
import { FETCH_STORE } from "./DogContents.queries";

export default function DetailDogContents() {
  const router = useRouter();
  const { data } = useQuery(FETCH_STORE, {
    variables: { storeID: String(router.query.cafeid) },
  });
  console.log(data?.fetchStore.storeImg);
  console.log(data?.fetchStore.storeImg[0].url);

  // const StoreImage = data?.fetchStore?.storeImg.url.split(",");

  return <DetailDogContentsUI data={data} />;
}
