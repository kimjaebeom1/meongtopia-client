import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import useCountNum from "../../commons/count/Countup";

export default function SecondLandingPage() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "200px",
    //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0.25, // 0 - 1
  });

  return (
    <Landing.SecondeWrapper className={inView ? "isActive" : ""} ref={ref}>
      <Landing.Wrap className={inView ? "isActive" : ""} ref={ref}>
        <Landing.RightWrapper>
          <Landing.MainLogo src="/images/newlogo.png" />
          <Landing.LogoInfo style={{ fontFamily: "" }}>
            사용자 데이터 기반의 애견카페 추천 서비스로
            <br />
            주변 정보 및 추천 경로 리스트 등,
            <br />
            종합적인 애견카페 경험을 제공합니다.
            <br />
            웹,앱 서비스 운영 중으로 어떠한 환경에서도
            <br />
            최적의 사용자 경험을 제공합니다.
          </Landing.LogoInfo>
        </Landing.RightWrapper>
      </Landing.Wrap>
    </Landing.SecondeWrapper>
  );
}
