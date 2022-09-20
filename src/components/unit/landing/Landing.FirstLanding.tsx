import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function FirstLandingPage() {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4,
  });

  return (
    // <div className={inView ? "isActive" : ""} ref={ref}>
    <Landing.FirstLanding>
      <Landing.Wrap1>
        <Landing.Part1>
          <Landing.PhoneWrap>
            <Landing.PhonePic1Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span1 className={inView ? "isActive" : ""} ref={ref}>
                내가 가고싶은 카페에
                <br />
              </Landing.Span1>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  borderBottom: "5px double lightsalmon",
                }}
              >
                어떤 멍멍이들이 있을까?
              </Landing.Span>
              <Landing.PhonePic1
                src="images/landingPhoneIntro.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic1Wrap>

            <Landing.PhonePic2Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span1
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  backgroundColor: "#F0B469",
                }}
              >
                내 주변에 동반가능한
                <br />
              </Landing.Span1>

              <Landing.Span className={inView ? "isActive" : ""} ref={ref}>
                카페 정보를 한눈에!
              </Landing.Span>
              <Landing.PhonePic2
                src="images/landingPhoneMap.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic2Wrap>

            <Landing.PhonePic3Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span1 className={inView ? "isActive" : ""} ref={ref}>
                이용자만 남길 수 있는
                <br />
              </Landing.Span1>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  borderBottom: "5px double lightsalmon",
                }}
              >
                솔직후기~
              </Landing.Span>
              <Landing.PhonePic3
                src="images/landingPhoneCo.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic3Wrap>

            <Landing.PhonePic4Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span1 className={inView ? "isActive" : ""} ref={ref}>
                멍토피아에서만 제공하는
                <br />
              </Landing.Span1>

              <Landing.Span className={inView ? "isActive" : ""} ref={ref}>
                특별 이벤트!✨
              </Landing.Span>
              <Landing.PhonePic4
                src="images/landingPhoneAd.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic4Wrap>
          </Landing.PhoneWrap>
        </Landing.Part1>
      </Landing.Wrap1>
    </Landing.FirstLanding>
    // </div>
  );
}
