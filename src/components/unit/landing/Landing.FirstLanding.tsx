import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";

export default function FirstLandingPage() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "100px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0.4, // 0 - 1
  });

  // 반려동물도 가족의 일원이자 반려동물을 동반 할 수 있는
  return (
    // <div className={inView ? "isActive" : ""} ref={ref}>
    // Wrap1, Part1 에 넣기
    <Landing.FirstLanding>
      <Landing.Wrap1>
        <Landing.Part1>
          <Landing.UnOTitle></Landing.UnOTitle>
          <Landing.PhoneWrap>
            <Landing.PhonePic1Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "YUniverse-B",
                  fontSize: "1.7rem",
                }}
              >
                내가 가고싶은 카페에
                <br />
              </Landing.Span>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "Y_Spotlight",
                  fontSize: "30px",
                  borderBottom: "5px double lightsalmon",
                }}
              >
                어떤 멍멍이들이 있을까?
              </Landing.Span>
              <Landing.PhonePic1
                src="images/landingPhoneintro.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic1Wrap>

            <Landing.PhonePic2Wrap
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "YUniverse-B",
                  fontSize: "1.7rem",

                  backgroundColor: "#F0B469",
                }}
              >
                내 주변에 동반가능한
                <br />
              </Landing.Span>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "Y_Spotlight",
                  fontSize: "30px",
                }}
              >
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
              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "YUniverse-B",
                  fontSize: "1.7rem",
                  color: "black",
                }}
              >
                이용자만 남길 수 있는
                <br />
              </Landing.Span>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "Y_Spotlight",
                  fontSize: "30px",
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
              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "YUniverse-B",
                  fontSize: "1.7rem",
                }}
              >
                멍토피아에서만 제공하는
                <br />
              </Landing.Span>

              <Landing.Span
                className={inView ? "isActive" : ""}
                ref={ref}
                style={{
                  fontFamily: "Y_Spotlight",
                  fontSize: "30px",
                }}
              >
                특별 이벤트!✨
              </Landing.Span>
              <Landing.PhonePic4
                src="images/landingPhoneAd.svg"
                className={inView ? "isActive" : ""}
                ref={ref}
              />
            </Landing.PhonePic4Wrap>
          </Landing.PhoneWrap>
          {/*2. 내 주변에 있는 동반가능한 카페정보를 한눈에..! (지도)
          3. 카페에 있는 멍멍이들의 정보도 알 수 있다. (디테일)
          4. 이용자만 남길 수 있는 솔직 후기 (댓글)
          4. 멍토피아에서 제공하는 특별 이벤트까지 (광고이미지) */}
        </Landing.Part1>
      </Landing.Wrap1>
    </Landing.FirstLanding>
    // </div>
  );
}
