import { gql } from "@apollo/client";

export const FETCH_PICKS = gql`
  query fetchPicks {
    fetchPicks {
      storeID
      name
      description
      entranceFee
      bigDog
      smallDog
      open
      close
      address
      addressDetail
      avgRating
      pickCount
      locationTag {
        locationTagID
        name
      }
      storeTag {
        tagID
        name
      }
      pet {
        petImgUrl
      }
    }
  }
`;
