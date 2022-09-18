import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  /* padding-top: 2rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 600px;
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
`;

export const BannerText = styled.div`
  width: 1200px;
`;

export const BannerInfoText = styled.div`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  width: 21rem;
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
  }

  & > span > div {
    color: orange;
  }
`;

export const BannerBtn = styled.button`
  width: 150px;
  height: 60px;
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
`;

export const RecommendWrapper = styled.div``;

export const PickTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-weight: 500;
  font-size: 30px;

  & > div {
    color: orange;
    font-weight: 600;
    font-size: 32px;
  }
`;

export const PickListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.5rem;
  height: 400px;
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

  @include hideTapHighlightColor();
  @include hardwareAccel();
  @include improveAntiAlias();

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
  font-size: 23px;
  color: #484848;
  padding: 5px 0;
  height: 35px;
`;

export const PickDescription = styled.li`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  width: 100%;
  font-size: 16px;
  height: 50px;
  font-weight: 300;
  color: #949494;
  text-overflow: ellipsis;
  padding-top: 0.3rem;
`;

export const Bottom = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 300px;
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
