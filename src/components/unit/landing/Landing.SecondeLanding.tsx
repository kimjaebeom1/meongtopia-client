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
        {useCountNum(120)}
      </Landing.Wrap>
    </Landing.SecondeWrapper>
  );
}
