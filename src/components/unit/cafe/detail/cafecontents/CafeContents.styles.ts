import styled from "@emotion/styled";
// import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { AiOutlineHeart } from "react-icons/ai";

export const Wrapper = styled.div`
  width: 30%;
  border-left: 1px solid;
  padding: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Pick = styled(AiOutlineHeart)`
  font-size: 20px;
  color: pink;
  margin-right: 50px;
  margin-bottom: 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #999;
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Tag = styled.div`
  width: 4.2rem;
  height: 1.5rem;
  font-size: 0.6rem;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div``;

export const Menu = styled.div``;

export const PaymentBtn = styled.button`
  width: 100%;
  height: 2rem;
  color: white;
  background-color: #f5cf1f;
  border: none;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const CalendarWrapper = styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  margin-bottom: 2rem;
`;

export const Map = styled.div`
  width: 300px;
  height: 200px;
`;

// export const Cal = styled(Calendar)`
//   .react-calendar {
//     width: 400px;
//     max-width: 100%;
//     background-color: #fff;
//     color: #222;
//     border-radius: 10px;
//     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//     font-family: Arial, Helvetica, sans-serif;
//     line-height: 1.125em;
//   }
//   .react-calendar__navigation button {
//     color: #f5cf1f;
//     min-width: 44px;
//     background: none;
//     font-size: 16px;
//     margin-top: 8px;
//   }
//   .react-calendar__navigation button:enabled:hover,
//   .react-calendar__navigation button:enabled:focus {
//     background-color: #f8f8fa;
//   }
//   .react-calendar__navigation button[disabled] {
//     background-color: #f0f0f0;
//   }
//   abbr[title] {
//     text-decoration: none;
//   }
//   .react-calendar__month-view__days__day--weekend {
//     color: #999;
//   }
//   .react-calendar__tile:enabled:hover,
//   .react-calendar__tile:enabled:focus {
//     background: #f8f8fa;
//     color: #f5cf1f;
//     border-radius: 6px;
//   }
//   .react-calendar__tile--now {
//     background: #ffd992;
//     border-radius: 6px;
//     font-weight: bold;
//     color: #fff;
//   }
//   .react-calendar__tile--now:enabled:hover,
//   .react-calendar__tile--now:enabled:focus {
//     background: #ffd992;
//     border-radius: 6px;
//     font-weight: bold;
//     color: #fff;
//   }
//   .react-calendar__tile--hasActive:enabled:hover,
//   .react-calendar__tile--hasActive:enabled:focus {
//     background: #f8f8fa;
//   }
//   .react-calendar__tile--active {
//     background: #f5cf1f;
//     border-radius: 6px;
//     font-weight: bold;
//     color: white;
//   }
//   .react-calendar__tile--active:enabled:hover,
//   .react-calendar__tile--active:enabled:focus {
//     background: #f5cf1f;
//     color: white;
//   }
//   .react-calendar--selectRange .react-calendar__tile--hover {
//     background-color: #f8f8fa;
//   }
//   .react-calendar__tile--range {
//     background: #f8f8fa;
//     color: #f5cf1f;
//     border-radius: 0;
//   }
//   .react-calendar__tile--rangeStart {
//     border-top-right-radius: 0;
//     border-bottom-right-radius: 0;
//     border-top-left-radius: 6px;
//     border-bottom-left-radius: 6px;
//     background: #f5cf1f;
//     color: white;
//   }
//   .react-calendar__tile--rangeEnd {
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//     border-top-right-radius: 6px;
//     border-bottom-right-radius: 6px;
//     background: #f5cf1f;
//     color: white;
//   }
// `;
