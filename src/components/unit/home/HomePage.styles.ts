import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 37.5rem;
  font-family: "myfont";
  background-image: url("/images/Rectangle123.png");
  background-size: cover;
  color: white;
  font-size: 2.5rem;
  content: "";
  padding-top: 8rem;
  opacity: 1;
  background-position-y: center;
  opacity: 1;
  justify-content: center;
  display: flex;

  @media ${breakPoints.mobile} {
    height: 20rem;
    padding-top: 3rem;
    font-size: 2rem;
  }
`;

export const BannerText = styled.div`
  width: 75rem;

  @media ${breakPoints.mobile} {
    padding-left: 2rem;
  }
`;

export const BannerInfoText = styled.div`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  width: 21rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: none;
  }
`;

export const BannerTextRow = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    color: orange;
  }

  & > span {
    display: flex;
    flex-direction: row;

    @media ${breakPoints.mobile} {
      margin-right: 1rem;
    }
  }

  & > span > div {
    color: orange;
  }
`;

export const BannerBtn = styled.button`
  width: 9.375rem;
  height: 3.75rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: #d9d9d94d;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding-top: 2rem;
  width: 75rem;
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const RecommendWrapper = styled.div`
  width: 100%;
`;

export const PickTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-weight: 500;
  font-size: 1.875rem;
  justify-content: space-between;

  & > div {
    display: flex;
    font-weight: 600;
    font-size: 2rem;
    align-items: flex-end;
  }

  & > div > div {
    color: orange;
  }
`;

export const MorePage = styled.span`
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const PickListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  height: 25rem;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MobilePickListWrapper = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    padding-top: 1rem;
    .slick-prev::before,
    .slick-next::before {
      display: none;
    }

    .slick-next,
    .slick-prev {
      left: 0;
      right: 0;
    }
  }
`;

export const PickList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.125rem;
  cursor: pointer;

  display: inline-block;
  transition-duration: $defaultDuration;
  transition-property: transform;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const PickImage = styled.img`
  width: 100%;
  height: 14.375rem;
  object-fit: cover;
`;

export const PickName = styled.li`
  text-align: left;
  width: 100%;
  font-size: 1.438rem;
  color: #484848;
  padding: 5px 0;
  height: 2.188rem;
`;

export const PickDescription = styled.li`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  width: 100%;
  font-size: 1.1rem;
  height: 3.125rem;
  font-weight: 300;
  color: #949494;
  text-overflow: ellipsis;
  padding-top: 0.3rem;
`;

export const Bottom = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 18.75rem;
  font-family: "myfont";
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/homebottom1.jpg");
  background-size: cover;
  color: white;
  font-size: 3.5rem;
  content: "";
  padding-top: 2em;
  opacity: 1;
  background-position-y: center;
  opacity: 1;
  justify-content: center;
  display: flex;
  /* filter: brightness(35%); */
`;
