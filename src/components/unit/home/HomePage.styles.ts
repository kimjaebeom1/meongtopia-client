import styled from "@emotion/styled";

export const Container = styled.div`
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
  opacity: "0.7";
  background-size: cover;
  color: white;
  font-size: 2.5rem;
  content: "";
  padding-top: 8rem;
  opacity: 0.9;
  padding-left: 20.5rem;
  background-position-y: center;
`;

export const BannerText = styled.div``;

export const BannerInfoText = styled.div`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  width: 21rem;
`;

export const BannerTextRow = styled.div`
  display: flex;

  & > div {
    padding-left: 1rem;
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
  margin-top: 1rem;
  width: 75rem;
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
`;

export const PickTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-weight: 500;

  & > div {
    color: orange;
  }
`;

export const PickListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  height: 400px;
`;

export const PickList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.125rem;
  cursor: pointer;
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
  text-align: left;
  width: 100%;
  font-size: 16px;
  font-weight: 300;
  color: #949494;
  height: 60px;
  padding-top: 1rem;

  /* overflow: hidden; */
`;
