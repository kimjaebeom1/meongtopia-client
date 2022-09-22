import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import useCountNum from "../../commons/count/Countup";

export default function SecondLandingPage() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "200px",
    threshold: 0,
  });

  return (
    <Landing.SecondeWrapper>
      <Landing.Wrap2>
        <Landing.TitleWrap className={inView ? "isActive" : ""} ref={ref}>
          <Landing.OwnerContent className={inView ? "isActive" : ""} ref={ref}>
            카페 등록시
            <br />
            <span
              style={{
                color: "#ffa500",
                fontFamily: "MICEGothic Bold",
                fontSize: "2.3rem",
              }}
            >
              한눈에 정리되어
              <br />
              확인 할 수 있는{" "}
            </span>
            <br />
            <span
              style={{
                borderBottom: "5px double lightsalmon",
              }}
            >
              수익 시스템
            </span>
          </Landing.OwnerContent>
          <Landing.OwnerContent className={inView ? "isActive" : ""} ref={ref}>
            /
          </Landing.OwnerContent>
          <Landing.OwnerContent className={inView ? "isActive" : ""} ref={ref}>
            카페 이용시 <br />
            <span
              style={{
                color: "#ffa500",
                fontFamily: "MICEGothic Bold",
                fontSize: "2.3rem",
              }}
            >
              간편한 결제 방식
            </span>
            으로 <br /> 바로 예약가능한 <br />
            <span
              style={{
                borderBottom: "5px double lightsalmon",
              }}
            >
              결제 시스템
            </span>
          </Landing.OwnerContent>
        </Landing.TitleWrap>
        <div>
          <Landing.WrapBottom className={inView ? "isActive" : ""} ref={ref}>
            <Landing.Img
              src="/images/landingcart.png"
              className={inView ? "isActive" : ""}
              ref={ref}
            />
          </Landing.WrapBottom>
        </div>
      </Landing.Wrap2>
    </Landing.SecondeWrapper>
  );
}
