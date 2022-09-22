import * as HomePage from "./HomePage.styles";
import { useInView } from "react-intersection-observer";
import { Rate } from "antd";
import DOMPurify from "dompurify";
import Link from "next/link";
import "antd/dist/antd.css";
import CommunitySlider from "../../commons/sliders/communityslider";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const NextArrow = styled.div`
  width: 5.125rem;

  padding-left: 1.5rem;
  height: 10rem;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function HomeUI(props: any) {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4, // 0 - 1
  });

  const Settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
  };

  return (
    <HomePage.Container>
      <HomePage.Banner>
        <HomePage.BannerText>
          <HomePage.BannerTextRow
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom
            "
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <span>멍토피아와 쉽게</span>
            <span>
              애견카페 &nbsp;
              <div>찾아보기</div>
            </span>
          </HomePage.BannerTextRow>
          <HomePage.BannerInfoText
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom
                "
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {`최근 펫팸족(pet+family)은 600만 가구를 넘는 등 반려동물 시장은 매년 커지고 있습니다. 이제 멍토피아와 함께하며 애견카페의 정보를 편리하게 얻어보세요!`}
          </HomePage.BannerInfoText>
          <Link href="/cafe">
            <HomePage.BannerBtn
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom
                            "
              data-aos-offset="100"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              더 알아보기
            </HomePage.BannerBtn>
          </Link>
        </HomePage.BannerText>
      </HomePage.Banner>
      <HomePage.Wrapper>
        <HomePage.RecommendWrapper>
          <HomePage.PickTag>
            <div>
              <div>추천</div>
              <img src="/images/logoHead.svg" /> 카페
            </div>
            <Link href="/cafe">
              <HomePage.MorePage>+ 더 보기</HomePage.MorePage>
            </Link>
          </HomePage.PickTag>

          {/* pc형 */}
          <HomePage.PickListWrapper>
            {props.data?.fetchPickRank.map((el: any) => (
              <HomePage.PickList
                onClick={props.onClickMoveToPick(el)}
                key={el.storeID}
              >
                {el.storeImg[0].url ? (
                  <HomePage.PickImage
                    src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                  />
                ) : (
                  <HomePage.PickImage src="/images/instacafe.jpeg" />
                )}

                <HomePage.PickName>{el.name}</HomePage.PickName>
                <Rate disabled value={el.avgRating} />

                <HomePage.PickDescription>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  ></div>
                </HomePage.PickDescription>
              </HomePage.PickList>
            ))}
          </HomePage.PickListWrapper>

          {/* 모바일형 */}
          <HomePage.MobilePickListWrapper>
            <Slider {...Settings}>
              {props.data?.fetchPickRank.map((el: any) => (
                <HomePage.PickList
                  onClick={props.onClickMoveToPick(el)}
                  key={el.storeID}
                >
                  {el.storeImg[0].url ? (
                    <HomePage.PickImage
                      src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                    />
                  ) : (
                    <HomePage.PickImage src="/images/instacafe.jpeg" />
                  )}

                  <HomePage.PickName>{el.name}</HomePage.PickName>
                  <Rate disabled value={el.avgRating} />

                  <HomePage.PickDescription>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.description),
                      }}
                    ></div>
                  </HomePage.PickDescription>
                </HomePage.PickList>
              ))}
            </Slider>
          </HomePage.MobilePickListWrapper>
        </HomePage.RecommendWrapper>

        {/* 신규 멍카페 */}
        <HomePage.RecommendWrapper
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom
               "
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <HomePage.PickTag>
            <div>
              <div>신규</div>
              <img src="/images/logoHead.svg" /> 카페
            </div>
            <Link href="/cafe">
              <HomePage.MorePage>+ 더 보기</HomePage.MorePage>
            </Link>
          </HomePage.PickTag>
          <HomePage.PickListWrapper>
            {props.recentData?.fetchStores.slice(0, 3).map((el: any) => (
              <HomePage.PickList
                onClick={props.onClickMoveToPick(el)}
                key={el.storeID}
              >
                {el.storeImg[0].url ? (
                  <HomePage.PickImage
                    src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                  />
                ) : (
                  <HomePage.PickImage src="/images/instacafe.jpeg" />
                )}

                <HomePage.PickName>{el.name}</HomePage.PickName>
                <Rate disabled value={el.avgRating} />

                <HomePage.PickDescription>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  ></div>
                </HomePage.PickDescription>
              </HomePage.PickList>
            ))}
          </HomePage.PickListWrapper>
          {/* 모바일 */}

          <HomePage.MobilePickListWrapper>
            <Slider {...Settings}>
              {props.recentData?.fetchStores.slice(0, 3).map((el: any) => (
                <HomePage.PickList
                  onClick={props.onClickMoveToPick(el)}
                  key={el.storeID}
                >
                  {el.storeImg[0].url ? (
                    <HomePage.PickImage
                      src={`https://storage.googleapis.com/${el.storeImg[0].url}`}
                    />
                  ) : (
                    <HomePage.PickImage src="/images/instacafe.jpeg" />
                  )}

                  <HomePage.PickName>{el.name}</HomePage.PickName>
                  <Rate disabled value={el.avgRating} />

                  <HomePage.PickDescription>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.description),
                      }}
                    ></div>
                  </HomePage.PickDescription>
                </HomePage.PickList>
              ))}
            </Slider>
          </HomePage.MobilePickListWrapper>
        </HomePage.RecommendWrapper>

        {/* 커뮤니티 배너 */}
        <HomePage.Bottom
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom
                     "
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div>커뮤니티</div>
        </HomePage.Bottom>
        {/* 커뮤니티 리스트 */}
        <HomePage.BottomWrapper
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom
                   "
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <HomePage.ListWrapper>
            <HomePage.PickTag>
              <div>
                <img src="/images/logoHead.svg" /> 카페{" "}
                <div> &nbsp;추천합니다!</div>
              </div>{" "}
              <Link href="/community">
                <HomePage.MorePage>+ 더 보기</HomePage.MorePage>
              </Link>
            </HomePage.PickTag>

            {/* 슬라이더 */}
            <Slider {...Settings}>
              {props.boardsData?.fetchBoards.slice(0, 3).map((el: any) => (
                <HomePage.CafeListWrapper key={uuidv4()}>
                  {/* 슬라이더 컴포넌트 */}
                  <HomePage.SliderWrapper>
                    <CommunitySlider url={el} />
                  </HomePage.SliderWrapper>
                  {el.title}
                </HomePage.CafeListWrapper>
              ))}
            </Slider>
          </HomePage.ListWrapper>

          {/* 이 달의 게시글 */}
          <HomePage.MonthPick>
            <HomePage.PickTag>
              <div>
                <img src="/images/logoHead.svg" /> 카페{" "}
                <div> &nbsp;이 달의 게시글</div>
              </div>{" "}
            </HomePage.PickTag>
            <HomePage.MonthPickImg src="/images/monthPick1.svg" />
            <HomePage.MonthPickImg2 src="/images/monthPick2.svg" />
          </HomePage.MonthPick>
        </HomePage.BottomWrapper>
      </HomePage.Wrapper>
      <HomePage.BottomAdWrapper>
        <img src="/images/logo01.svg" />
        <div>
          사용자 데이터 기반의 애견카페 추천 서비스로 주변 정보 및 추천 경로
          리스트 등, 종합적인 애견카페 경험을 제공합니다.
        </div>
        <div>
          웹, 앱 서비스 운영 중으로 어떠한 환경에서도 최적의 사용자 경험을
          제공합니다.
        </div>
      </HomePage.BottomAdWrapper>

      {/* <div
        style={{
          marginTop: "4rem",
          backgroundColor: "orange",
          width: "1200px",
          height: "300px",
        }}
      >
        <img width="150px" src="/images/location1.png" />
      </div> */}
    </HomePage.Container>
  );
}
