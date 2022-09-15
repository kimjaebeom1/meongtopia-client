import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

export default function LandingPopCafe() {
  // ref가 화면에 나타나면, inView는 true, 아니면 false를 반환한다.
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    // rootMargin: "200px",
    //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0, // 0 - 1
  });

  return (
    <Landing.DivWrap1 className={inView ? "isActive" : ""} ref={ref}>
      <Landing.DivWrap2 className={inView ? "isActive" : ""} ref={ref}>
        <Landing.ReTitle>
          실시간 인기
          <Landing.Meong src="/images/meong.png" />
          카페
        </Landing.ReTitle>

        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "lightgray" }}
        >
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Landing.CafeImg src="/images/landingcafe.jpg" />
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8}>
              <Landing.CafeInfoWrap>
                <Landing.InfoTitle>상세정보</Landing.InfoTitle>
                <Landing.CafeName>상수역 도기 애견카페</Landing.CafeName>
                <Landing.RatingWrap>
                  <Landing.RatingTitle>별점</Landing.RatingTitle>
                  <Landing.RatingImg src="/images/landingstar.png" />
                </Landing.RatingWrap>
                <Landing.CafeDetailInfo>
                  서울특별시 마포구 상수동 12-3
                </Landing.CafeDetailInfo>
                <Landing.CafeDetailInfo>9:00 ~ 20:00</Landing.CafeDetailInfo>
                <Landing.CafeDetailInfo>
                  대표 메뉴 : 아메리카노 + 입장권 8500원
                </Landing.CafeDetailInfo>
              </Landing.CafeInfoWrap>
            </Col>
          </Row>
        </Row>
      </Landing.DivWrap2>
      //{" "}
    </Landing.DivWrap1>
  );
}
