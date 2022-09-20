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
  @media ${breakPoints.mobile} {
    height: 8rem;
    font-size: 1.5rem;
  }
`;

// 커뮤니티 리스트

export const ListWrapper = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const CafeListWrapper = styled.div`
  margin-top: 1rem;
  width: 50%;
  height: 19rem;
  margin-bottom: 2rem;
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 7%) 0px 0px 12px 0px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 0.2rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 1rem;
  }
`;

export const CafeList = styled.ul`
  width: 50rem;
  padding: 1rem 3rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ContentsText = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  line-height: normal;
  font-weight: 600;
  margin: 0.5rem 0;
  & span {
    font-size: 1rem;
    line-height: normal;

    @media ${breakPoints.mobile} {
      font-size: 1.2rem;
      margin: 0.2rem 0;
    }

    & p {
      margin: 0;
      margin-top: 0.5rem;
    }
  }

  @media ${breakPoints.mobile} {
    margin: 0.2rem 0;
    padding: 0rem;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const MonthPick = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 100%;
    align-items: baseline;
  }
`;

export const MonthPickImg = styled.img`
  margin-top: 1rem;
  height: 18.75rem;
  position: relative;
  z-index: 3;

  @media ${breakPoints.mobile} {
    margin-left: 6rem;
  }
`;

export const MonthPickImg2 = styled.img`
  margin-top: 7rem;
  margin-left: 4rem;
  height: 18.75rem;
  position: absolute;
  z-index: 1;

  :hover {
    z-index: 5;
    transition: all 2 ease;
  }
  @media ${breakPoints.mobile} {
    margin-left: 9rem;
  }
`;

export const BottomAdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 31.25rem;
  background-color: rgba(241, 241, 241, 0.6);

  @media ${breakPoints.mobile} {
    height: 25rem;
  }

  & > div {
    padding-top: 2rem;
    font-size: 1.6rem;
    font-family: "myFont";
  }
  @media ${breakPoints.mobile} {
    margin-top: 2rem;
    padding: 1rem;
  }

  & > img {
    width: 18.75rem;
    @media ${breakPoints.mobile} {
      width: 12.5rem;
    }
  }
`;
