import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import useCountNum from "../../commons/count/Countup";

export default function SecondLandingPage() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "200px",
    //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
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
            수익 시스템
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
            결제 시스템
          </Landing.OwnerContent>
        </Landing.TitleWrap>
        <div>
          <Landing.WrapBottom className={inView ? "isActive" : ""} ref={ref}>
            <Landing.Img
              src="/images/landingLastImg3.svg"
              className={inView ? "isActive" : ""}
              ref={ref}
            />
          </Landing.WrapBottom>
        </div>
      </Landing.Wrap2>
    </Landing.SecondeWrapper>
  );
}