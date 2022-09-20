import styled from "@emotion/styled";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export default function KakaoMap(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=aac701dce91a417545271c6abdaf13df&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.48480057259145,
            126.89616803105925
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address || props.data?.fetchStore.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const imageSrc = "/images/smalldog.svg"; // 마커이미지의 주소입니다
              const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
              const imageOption = {
                offset: new window.kakao.maps.Point(27, 69),
              }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

              // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
                image: markerImage,
              });

              marker.setMap(map);

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${
                  props.address || props.data?.fetchStore.address
                }</div>`,
              });
              infowindow.open(map, marker);
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address || props.data?.fetchStore.address]);

  return (
    <>
      <MapDiv id="map" />
    </>
  );
}
