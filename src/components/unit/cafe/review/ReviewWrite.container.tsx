import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_STORE } from "../detail/dogcontents/DogContents.queries";
import ReviewWriteUI from "./ReviewWrite.presenter";
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  FETCH_STORE_REVIEWS,
  UPDATE_REVIEW,
} from "./ReviewWrite.queries";

export default function ReviewWrite() {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_REVIEW);
  const [updateReview] = useMutation(UPDATE_REVIEW);
  const [deleteReview, refetch] = useMutation(DELETE_REVIEW);
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(5);

  const { data } = useQuery(FETCH_STORE_REVIEWS, {
    variables: {
      storeID: router.query.cafeid,
    },
  });

  const [add, setAdd] = useState(1);

  const onClickAdd = () => {
    setAdd((prev) => prev + 1);
  };

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickWriteReview = async () => {
    try {
      await createReview({
        variables: {
          storeID: router.query.cafeid,
          createReviewInput: {
            rating,
            contents,
          },
        },

        refetchQueries: [
          {
            query: FETCH_STORE,
            variables: { storeID: router.query.cafeid },
          },
          {
            query: FETCH_STORE_REVIEWS,
            variables: { storeID: router.query.cafeid },
          },
        ],
      });
      setContents("");
      setRating(0);
      alert("리뷰 작성이 완료되었습니다");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDeleteReview = async () => {
    await deleteReview({
      refetchQueries: [
        {
          query: FETCH_STORE_REVIEWS,
          variables: { storeID: router.query.cafeid },
        },
      ],
    });

    alert("삭제되었습니다");
  };
  // const onClickUpdateReview = async () => {
  //   const updateReviewInput:any= {};
  //   if (contents) updateReviewInput.contents = contents
  //   if (rating) updateReviewInput.rating = rating

  //   try {
  //     await updateReview({
  //       variables: {
  //         updateReviewInput,
  //         storeID: props.el?.id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_STORE_REVIEWS,
  //           variables: { storeID: router.query.id },
  //         },
  //       ],
  //     });
  //     props?.setIsEdit(false);
  //   } catch (error) {
  //     alert((error as Error).message);
  //   }
  // };

  return (
    <ReviewWriteUI
      onClickWriteReview={onClickWriteReview}
      onChangeContents={onChangeContents}
      setRating={setRating}
      data={data}
      add={add}
      onClickAdd={onClickAdd}
      contents={contents}
      onClickDeleteReview={onClickDeleteReview}
    />
  );
}
