import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import CountUp from "../../commons/count/Countup";

export default function LandingWebInfo() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "800px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  const props = useSpring({ number: Math.floor(231), from: { number: 1 } });
  return (
    <Landing.ThirdWrapper>
      <Landing.LeftWrapper>
        <Landing.LeftItem1>
          전국
          <br />
          <span style={{ fontWeight: "1200" }}>{CountUp(157)}개 매장 등록</span>
        </Landing.LeftItem1>

        <Landing.LeftItem2></Landing.LeftItem2>

        <Landing.LeftItem3></Landing.LeftItem3>
      </Landing.LeftWrapper>
      <Landing.RightWrapper>
        <Landing.Count>{CountUp(456)}</Landing.Count>
      </Landing.RightWrapper>
    </Landing.ThirdWrapper>
  );
}
