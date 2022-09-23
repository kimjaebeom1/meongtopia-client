import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import CountUp from "../../commons/count/Countup";
import { useRouter } from "next/router";

export default function LandingWebInfo() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    // rootMargin: "800px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/home");
  };

  const props = useSpring({ number: Math.floor(211), from: { number: 1 } });

  return (
    <Landing.ThirdWrapper>
      <Landing.Wrapper1>
        <Landing.RightWrapper>
          <Landing.LogoWrap onClick={onClickLogo}>
            <Landing.MainLogo src="/images/newlogo.png" />
            <Landing.LogoIcon>sdasd</Landing.LogoIcon>
          </Landing.LogoWrap>
          <Landing.LogoInfo>
            <span style={{ backgroundColor: "#FFD5B4" }}>
              사용자 데이터 기반의 애견카페 추천 서비스
            </span>
            로
            <br />
            <span>주변 정보 및 추천 경로 리스트</span> 등, <br />
            <span style={{ borderBottom: "4px double lightsalmon" }}>
              최적의 사용자 경험을 기반으로 검색서비스를 제공하고 있습니다.
            </span>
          </Landing.LogoInfo>
        </Landing.RightWrapper>

        <Landing.LeftWrapper>
          <Landing.LeftItem1 className={inView ? "isActive" : ""} ref={ref}>
            <Landing.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                전국
                <br />
                <span
                  style={{
                    fontFamily: "Happiness-Sans-Bold",
                    color: "#8B4513",
                  }}
                >
                  {CountUp(147)}개
                </span>
                <br />
                매장 등록
              </div>
              <br />
            </Landing.Pick>
            <Landing.Content3 className={inView ? "isActive" : ""} ref={ref}>
              오랜 시간동안 멍토피아를
              <br />
              찾아주시고 함께 동행하는
              <br />
              카페들이 계속해서
              <br />
              늘어나고 있습니다.
            </Landing.Content3>
          </Landing.LeftItem1>

          <Landing.LeftItem2 className={inView ? "isActive" : ""} ref={ref}>
            <Landing.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                월간 사용자 수
                <br />
                <span
                  style={{
                    fontFamily: "Happiness-Sans-Bold",
                    color: "#8B4513",
                  }}
                >
                  {CountUp(1358594)}
                </span>
                <br />
                만명 +
              </div>
              <br />
            </Landing.Pick>
            <Landing.Content3 className={inView ? "isActive" : ""} ref={ref}>
              월간 130만명 이상의
              <br />
              유저들이 <br />
              멍토피아를 <br /> 사용중입니다.
            </Landing.Content3>
          </Landing.LeftItem2>

          <Landing.LeftItem3 className={inView ? "isActive" : ""} ref={ref}>
            <Landing.Pick className={inView ? "isActive" : ""} ref={ref}>
              <div style={{ fontSize: "23px" }}>
                페이지뷰
                <br />
                <span
                  style={{
                    fontFamily: "Happiness-Sans-Bold",
                    color: "#8B4513",
                  }}
                >
                  {CountUp(851231)}
                </span>
                <br />건 +
              </div>
              <br />
            </Landing.Pick>
            <Landing.Content3 className={inView ? "isActive" : ""} ref={ref}>
              멍토피아는
              <br />
              앱/웹/SNS채널의
              <br />
              페이지뷰는 월 85만건
              <br />
              이상입니다.
            </Landing.Content3>
          </Landing.LeftItem3>
        </Landing.LeftWrapper>
      </Landing.Wrapper1>
    </Landing.ThirdWrapper>
  );
}
