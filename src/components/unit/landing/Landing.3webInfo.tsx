import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

export default function LandingWebInfo() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "800px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  const props = useSpring({ number: Math.floor(231), from: { number: 1 } });
  return (
    <Landing.DescWrap>
      <Landing.Title>
        <Landing.Logo src="/images/landinglogo.png" />
        사용자 데이터 기반의 애견카페 추천 서비스로 주변 정보 및 추천 경로
        리스트 등, 종합적인 애견카페 경험을 제공합니다.
        <br />
        웹, 앱 서비스 운영 중으로 어떠한 환경에서도 최적의 사용자 경험을
        제공합니다.
      </Landing.Title>

      <Landing.DetailWrap>
        <Landing.Detail>
          <Landing.DescMents1>
            월간 사용자 수 <br />
            <animated.span>{props.number}</animated.span> +
          </Landing.DescMents1>
          <Landing.DescMents2>
            월간 200만명 이상의 유저들이 <br />
            멍토피아를 사용중입니다.
          </Landing.DescMents2>
        </Landing.Detail>

        <Landing.Detail>
          <Landing.DescMents1>
            SNS채널
            <br />
            <animated.span>{props.number}</animated.span> +
          </Landing.DescMents1>
          <Landing.DescMents2>
            약 800만명의 팔로워를 <br />
            보유하고 있습니다.
          </Landing.DescMents2>
        </Landing.Detail>

        <Landing.Detail>
          <Landing.DescMents1>
            페이지뷰 <br />
            <animated.span>{props.number}</animated.span> +
          </Landing.DescMents1>
          <Landing.DescMents2>
            멍토피아는 앱/웹/SNS채널의 <br />
            페이지뷰는 월 92,000만건 이상입니다.
          </Landing.DescMents2>
        </Landing.Detail>
      </Landing.DetailWrap>
    </Landing.DescWrap>
  );
}
