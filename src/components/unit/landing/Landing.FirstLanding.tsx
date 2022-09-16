import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function FirstLandingPage() {
  // const [ref, inView] = useInView({
  //   root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
  //   rootMargin: "100px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
  //   threshold: 0.4, // 0 - 1
  // });

  const [ref, inView] = useInView({
    threshold: 0,
  });

  // 반려동물도 가족의 일원이자 반려동물을 동반 할 수 있는
  return (
    // <div className={inView ? "isActive" : ""} ref={ref}>
    <Landing.FirstLanding className={inView ? "isActive" : ""} ref={ref}>
      <Landing.Wrap1 className={inView ? "isActive" : ""} ref={ref}>
        <Landing.Part1 className={inView ? "isActive" : ""} ref={ref}>
          <Landing.Contents>
            <Landing.Content>
              <Landing.Strong>펫 프렌들리</Landing.Strong>
              애견카페 등록 사이트
            </Landing.Content>
            <Landing.Logo
              className={inView ? "isActive" : ""}
              ref={ref}
              src="/images/newlogo.png"
            />
            <Landing.Content>
              반려동물을 가족의 일원이자 동반자로 여기는 시대 속에서 <br />
              함께 기분 좋은 시간을 보낼 수 있도록 <br />
              <Landing.Highlight>
                애견카페를 운영하는 사장님과 견주들을 이어주는 서비스입니다.
              </Landing.Highlight>
            </Landing.Content>
          </Landing.Contents>
        </Landing.Part1>
      </Landing.Wrap1>
    </Landing.FirstLanding>
    // </div>
  );
}
