import * as Landing from "./Landing.styles";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export default function LandingPresenterPage() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "800px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  return (
    <Landing.Wrapper>
      <Landing.LastPart>
        <Landing.Logo src="/images/landinglogo2.png" />
      </Landing.LastPart>
    </Landing.Wrapper>
  );
}
