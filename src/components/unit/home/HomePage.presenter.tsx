import * as HomePage from "./HomePage.styles";
import { useInView } from "react-intersection-observer";
import { Rate } from "antd";
import DOMPurify from "dompurify";
import Link from "next/link";
import "antd/dist/antd.css";
import Slider from "react-slick";

export default function HomeUI(props: any) {
  const [ref, inView] = useInView({
    root: null,
    rootMargin: "100px",
    threshold: 0.4, // 0 - 1
  });

  const mobileSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <Slider {...mobileSettings}>
              {props.data?.fetchPickRank.map((el) => (
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
          <div className={inView ? "isActive" : ""} ref={ref}>
            <HomePage.PickListWrapper
              className={inView ? "isActive" : ""}
              ref={ref}
            >
              {props.recentData?.fetchStores.slice(0, 3).map((el) => (
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
          </div>
        </HomePage.RecommendWrapper>
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
      </HomePage.Wrapper>
    </HomePage.Container>
  );
}
