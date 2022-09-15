import * as Landing from "./Landing.styles";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@apollo/client";
import { FETCH_PICK_RANK } from "./Langding.queries";
import { PropaneSharp } from "@mui/icons-material";

export default function LandingRecoCafe() {
  const [ref, inView] = useInView({
    root: null, // root : 대상에 대한 경계를 지정합니다. 지정하지 않는다면 뷰포트를 경계로 지정합니다.
    rootMargin: "500px", //rootMargin : root에 대한 margin을 설정합니다. 이는 CSS의 margin과 비슷합니다.
    threshold: 0.8, // 0 - 1
  });

  const { data } = useQuery(FETCH_PICK_RANK);

  return (
    <Landing.DivWrap className={inView ? "isActive" : ""} ref={ref}>
      <Landing.ReCafeList className={inView ? "isActive" : ""} ref={ref}>
        <Landing.ReCafeWrap>
          <Landing.ReTitle>
            추천
            <Landing.Meong src="/images/meong.png" />
            카페
          </Landing.ReTitle>
          <Landing.FlipWrap>
            <Landing.Filp>
              <Landing.TopWrap>
                <Landing.TopImgFE></Landing.TopImgFE>
                <Landing.TopImgBE>
                  <Landing.TopContentWrap>
                    {/* <Landing.ImgStoreInfo> */}
                    <Landing.Rank>01</Landing.Rank>
                    <Landing.ImgStoreName>
                      {data?.fetchPickRank[0].name}
                    </Landing.ImgStoreName>
                    {/* </Landing.ImgStoreInfo> */}

                    <Landing.ImgRating>
                      별점 {data?.fetchPickRank[0].avgRating}.0
                    </Landing.ImgRating>
                    <Landing.ImgDesc>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.fetchPickRank[0].description,
                        }}
                      />
                    </Landing.ImgDesc>
                  </Landing.TopContentWrap>
                </Landing.TopImgBE>
              </Landing.TopWrap>
            </Landing.Filp>

            <Landing.Filp>
              <Landing.TopWrap>
                <Landing.TopImgFE></Landing.TopImgFE>
                <Landing.TopImgBE>
                  <Landing.TopContentWrap>
                    {/* <Landing.ImgStoreInfo> */}
                    <Landing.Rank>02</Landing.Rank>
                    <Landing.ImgStoreName>
                      {data?.fetchPickRank[1].name}
                    </Landing.ImgStoreName>
                    {/* </Landing.ImgStoreInfo> */}

                    <Landing.ImgRating>
                      별점 {data?.fetchPickRank[1].avgRating}.0
                    </Landing.ImgRating>
                    <Landing.ImgDesc>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.fetchPickRank[1].description,
                        }}
                      />
                    </Landing.ImgDesc>
                  </Landing.TopContentWrap>
                </Landing.TopImgBE>
              </Landing.TopWrap>
            </Landing.Filp>

            <Landing.Filp>
              <Landing.TopWrap>
                <Landing.TopImgFE></Landing.TopImgFE>
                <Landing.TopImgBE>
                  <Landing.TopContentWrap>
                    {/* <Landing.ImgStoreInfo> */}
                    <Landing.Rank>03</Landing.Rank>
                    <Landing.ImgStoreName>
                      {data?.fetchPickRank[2].name}
                    </Landing.ImgStoreName>
                    {/* </Landing.ImgStoreInfo> */}

                    <Landing.ImgRating>
                      별점 {data?.fetchPickRank[2].avgRating}.0
                    </Landing.ImgRating>
                    <Landing.ImgDesc>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.fetchPickRank[2].description,
                        }}
                      />
                    </Landing.ImgDesc>
                  </Landing.TopContentWrap>
                </Landing.TopImgBE>
              </Landing.TopWrap>
            </Landing.Filp>
          </Landing.FlipWrap>
        </Landing.ReCafeWrap>

        {/* <Landing.DogsImg src="/images/landingDogs.png" /> */}
      </Landing.ReCafeList>
    </Landing.DivWrap>
  );
}
