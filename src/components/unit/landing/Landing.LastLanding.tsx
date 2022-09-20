import { useRouter } from "next/router";
import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function LastLandingPage() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    router.push("/home");
  };

  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4,
  });

  return (
    <Landing.LastWrapper>
      <Landing.Wrapper className={inView ? "isActive" : ""} ref={ref}>
        <Landing.Logo
          src="/images/newlogo.png"
          className={inView ? "isActive" : ""}
          ref={ref}
        />
        <div>
          <Landing.Text
            onClick={onClickMoveToHome}
            className={inView ? "isActive" : ""}
            ref={ref}
          >
            들어가기
          </Landing.Text>
        </div>
      </Landing.Wrapper>
    </Landing.LastWrapper>
  );
}
