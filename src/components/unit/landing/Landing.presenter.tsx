import * as Landing from "./Landing.styles";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useInView } from "react-intersection-observer";
import { SignUp } from "../login/Login.styles";

export default function LandingPresenterPage() {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "800px",
    threshold: 0.2, // 0 - 1
  });

  return (
    <Landing.Wrapper>
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
            <Landing.TopWrap>
              <Landing.TopImg src="/images/landingcafe2.jpeg" />
            </Landing.TopWrap>
            <Landing.TopWrap>
              <Landing.TopImg src="/images/landingcafe2.jpeg" />
            </Landing.TopWrap>
            <Landing.TopWrap>
              <Landing.TopImg src="/images/landingcafe2.jpeg" />
            </Landing.TopWrap>
          </Landing.ReCafeWrap>
        </Landing.ReCafeList>
      </Landing.DivWrap>

      <Landing.ReTitle>
        실시간 인기
        <Landing.Meong src="/images/meong.png" />
        카페
      </Landing.ReTitle>
      <Row gutter={[32, 32]} justify="center" align="middle">
        {/* <Col xs={24} sm={1} md={1} lg={1} xl={1} /> */}
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
          {/* <Row>
            <Col></Col>
            <Col></Col>
          </Row> */}
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

        {/* <Col xs={24} sm={1} md={1} lg={1} xl={1} /> */}
        <Landing.Line />
        <Col xs={24} sm={8} md={8} lg={8} xl={8}>
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
            {/* <Landing.DescImg src="/images/test.jpeg" /> */}
            <Landing.DescMents1>
              월간 사용자 수 <br />
              2,000,000명 +
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
              8,000,000명 +
            </Landing.DescMents1>
            <Landing.DescMents2>
              약 800만명의 팔로워를 <br />
              보유하고 있습니다.
            </Landing.DescMents2>
          </Landing.Detail>

          <Landing.Detail>
            <Landing.DescMents1>
              페이지뷰 <br />
              92,000,000건 +
            </Landing.DescMents1>
            <Landing.DescMents2>
              멍토피아는 앱/웹/SNS채널의 <br />
              페이지뷰는 월 92,000만건 이상입니다.
            </Landing.DescMents2>
          </Landing.Detail>
        </Landing.DetailWrap>
      </Landing.DescWrap>

      <Landing.LastPart>
        <Landing.Logo src="/images/landinglogo2.png" />
      </Landing.LastPart>
    </Landing.Wrapper>
  );
}
