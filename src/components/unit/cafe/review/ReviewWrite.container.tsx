import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_STORE } from "../detail/dogcontents/DogContents.queries";
import ReviewWriteUI from "./ReviewWrite.presenter";
import { CREATE_REVIEW, UPDATE_REVIEW } from "./ReviewWrite.queries";

export default function ReviewWrite() {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_REVIEW);
  const [updateReview] = useMutation(UPDATE_REVIEW);
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(5);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickWriteReview = async () => {
    try {
      await createReview({
        variables: {
          StoreID: router.query.cafeid,
          createReviewInput: {
            rating,
            contents,
          },
          refetchQueries: [
            {
              query: FETCH_STORE,
              variables: { storeID: router.query.cafeid },
            },
          ],
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setContents("");
    setRating(0);
  };

  return (
    <ReviewWriteUI
      onClickWriteReview={onClickWriteReview}
      onChangeContents={onChangeContents}
      setRating={setRating}
    />
  );
}
