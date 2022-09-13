import styled from "@emotion/styled";
import { Select } from "antd";
import { BiTime, BiPhone } from "react-icons/bi";

export const Wrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  width: 100%;
`;

export const Line = styled.div`
  margin-top: 20px;
  margin-bottom: 1rem;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

// 카페 이미지

export const StoreNameTag = styled.div``;

export const HeadInfo = styled.div`
  font-size: 14px;
  color: #808080;
  display: flex;
  flex-direction: row;
  & > div {
    padding-top: 5px;
    display: flex;
    margin-left: 8px;
    align-items: center;
  }
`;

// 카페 이미지
export const CafeImageWrapper = styled.div`
  width: 1200px;
  padding-top: 2rem;
  display: block;
  @media screen {
  }
`;

export const mainCafeImg = styled.img`
  display: block;
  width: 100%;
  height: 410px;
  border-radius: 5px;
`;

export const cafeImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

// 강아지 이미지 슬라이더

export const DogTag = styled.div`
  padding-top: 2rem;
  font-size: 25px;
  font-weight: 700;
`;

export const DogListWrapper = styled.div`
  width: 90%;

  & > li {
    color: white;
  }

  /* .slick-prev:before {
    font-size: 50px;
    color: #f5cf1f;
  } */

  .slick-next:before {
    font-size: 50px;
    color: #f5cf1f;
  }
`;

export const SliderItem = styled.div`
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    padding: 0.5rem;
  }
`;

// export const PrevArrow = styled.div`
//   display: block;
//   z-index: 2;
//   margin-left: 25px;
//   width: 50px;
//   height: 50px;
// `;

export const NextArrow = styled.div`
  display: block;
  width: 50px;
  height: 150px;
  padding-left: 1.5rem;
`;

// 카페정보(Body)

export const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  padding-bottom: 2rem;
`;

export const CafeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  font-size: 16px;
  font-weight: 500;
`;

export const LocationTag = styled.span`
  background-color: #f5cf1f;
  border-radius: 15px;
  width: 100px;
  border: 1px solid #d6bcd6;
  display: block;
  margin-top: 1em;
  font-size: 12px;
  padding: 7px 25px;
  font-family: 700;
  text-align: center;
`;

export const StoreTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StoreTag = styled.span`
  margin-left: 1em;
  background-color: #f5cf1f;
  border-radius: 15px;
  width: 132px;
  border: 1px solid #d6bcd6;
  display: block;
  margin-top: 1em;
  font-size: 12px;
  padding: 7px 25px;
  font-family: 700;
  text-align: center;
`;

export const BodyInfoTag = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const DogCount = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  width: 100%;
  flex-direction: row;
  font-size: 17px;

  & > div > img {
    margin-right: 0.5rem;
    width: 30px;
  }

  & > div {
    margin-right: 2rem;
  }
`;

export const DescriptionWrapper = styled.div`
  padding-top: 2rem;
  width: 70%;
`;

export const AddressWrapper = styled.div`
  font-size: 16px;
  display: flex;
  padding-top: 2rem;

  & > div {
    margin-left: 1rem;
    font-weight: 600;
  }

  & > img {
    width: 20px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
  font-size: 16px;

  & > div {
    margin-left: 1rem;
    font-weight: 600;
  }
`;

export const Time = styled(BiTime)`
  font-size: 23px;
`;

export const Phone = styled(BiPhone)`
  font-size: 23px;
`;

// 예약 부분

export const ReservationWrapper = styled.div`
  position: sticky;
  top: 50px;
  width: 35%;
  height: 500px;
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const NumberTag = styled.div`
  padding-top: 1rem;
  font-size: 14px;
`;

export const SelectWrapper = styled(Select)`
  width: 100%;
  .div {
    .ant-select {
      height: 300px;
    }
  }
`;

export const ReservationBtn = styled.button`
  margin-top: 2rem;
  background-color: #f5cf1f;
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const EntranceFee = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const FeeInfo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.8rem;
  font-size: 12px;
  font-weight: 400;
`;

export const ReservationLine = styled.div`
  margin-top: 20px;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const Total = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
`;

// footer

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterInfo = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: row;

  & > img {
    width: 30px;
  }

  & > div {
    padding-top: 5px;
    display: flex;
    margin-left: 8px;
    align-items: center;
  }
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 400px;
  font-size: 14px;
`;

export const MapTag = styled.div`
  margin-bottom: 1em;
  font-size: 25px;
  font-weight: 700;
`;
