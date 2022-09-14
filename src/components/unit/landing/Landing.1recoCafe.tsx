import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function LandingRecoCafe() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "500px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0.8, // 0 - 1
  });
  return (
    <Landing.DivWrap className={inView ? "isActive" : ""} ref={ref}>
      <Landing.ReCafeList className={inView ? "isActive" : ""} ref={ref}>
        <Landing.ReTitle>
          추천
          <Landing.Meong src="/images/meong.png" />
          카페
        </Landing.ReTitle>

        <Landing.ReCafeWrap>
          <Landing.Ad src="/images/landingad.png" />
          <Landing.Line2 />

          <Landing.Filp>
            <Landing.TopWrap>
              <Landing.TopImgFE>
                {/* <Landing.TopContentWrap>
                  <Landing.Title>멍멍이 세상</Landing.Title>
                  <Landing.Title>멍멍이 세상</Landing.Title>
                </Landing.TopContentWrap> */}
              </Landing.TopImgFE>
              <Landing.TopImgBE>
                {/* <Landing.TopContentWrap>
                  <Landing.Title>멍멍이 세상</Landing.Title>
                  <Landing.Title>멍멍이 세상</Landing.Title>
                </Landing.TopContentWrap> */}
              </Landing.TopImgBE>
            </Landing.TopWrap>
          </Landing.Filp>

          <Landing.Filp>
            <Landing.TopWrap>
              <Landing.TopImgFE />
              <Landing.TopImgBE />
            </Landing.TopWrap>
          </Landing.Filp>

          <Landing.Filp>
            <Landing.TopWrap>
              <Landing.TopImgFE />
              <Landing.TopImgBE />
            </Landing.TopWrap>
          </Landing.Filp>
        </Landing.ReCafeWrap>
        {/* <Landing.FootPrint src="/images/landingFoot.png" /> */}
        {/* <Landing.DogsImg src="/images/landingDogs.png" /> */}
      </Landing.ReCafeList>
    </Landing.DivWrap>
  );
}
