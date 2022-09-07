import * as CafeContentsWrite from "./CafeContentsWrite.styles";
import CafeImgUpload from "../../../../commons/upload/cafeimg/CafeImgUpload.container";
import { v4 as uuidv4 } from "uuid";
import KakaoMap from "../../../../commons/map";
import { Radio } from "antd";
import "antd/dist/antd.css";
import DogImgUpload from "../../../../commons/upload/dogimg/DogImgUpload.container";

export default function CafeContentsWriteUI(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickCreateStore)}>
        <CafeContentsWrite.Wrapper>
          {props.next && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <DogImgUpload />
                <CafeContentsWrite.DogProfileWrapper>
                  <CafeContentsWrite.DogName placeholder="강아지 이름을 적어주세요"></CafeContentsWrite.DogName>
                  <CafeContentsWrite.DogAge placeholder="강아지 나이를 적어주세요"></CafeContentsWrite.DogAge>
                  <CafeContentsWrite.DogBreed placeholder="견종을 적어주세요"></CafeContentsWrite.DogBreed>
                  <CafeContentsWrite.DogDesc placeholder="강아지 성격을 적어주세요"></CafeContentsWrite.DogDesc>
                </CafeContentsWrite.DogProfileWrapper>
              </div>
              <CafeContentsWrite.Tag>옵션 검색 키워드</CafeContentsWrite.Tag>
              <CafeContentsWrite.OptionWrapper>
                <CafeContentsWrite.WithDogBtn
                  type="button"
                  withDog={props.withDog}
                  value="애견동반 가능"
                  onClick={props.onClickWithDog}
                >
                  애견동반 가능
                </CafeContentsWrite.WithDogBtn>
                <CafeContentsWrite.YardBtn
                  yard={props.yard}
                  type="button"
                  value="야외마당 있음"
                  onClick={props.onClickYard}
                >
                  야외마당 있음
                </CafeContentsWrite.YardBtn>
                <CafeContentsWrite.LargeDogBtn
                  type="button"
                  largeDog={props.largeDog}
                  value="대형견 있음"
                  onClick={props.onClickLargeDog}
                >
                  대형견 있음
                </CafeContentsWrite.LargeDogBtn>
              </CafeContentsWrite.OptionWrapper>
            </>
          )}

          {!props.next && (
            <>
              <CafeContentsWrite.Tag>
                업체명을 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNameInput
                {...props.register("name")}
              ></CafeContentsWrite.CafeNameInput>
              <CafeContentsWrite.Tag>
                업체 사진을 추가해 주세요.
                <CafeContentsWrite.ImageUploadWrapper>
                  {props.fileUrls.map((el, index) => (
                    <CafeImgUpload
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                  ))}
                </CafeContentsWrite.ImageUploadWrapper>
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.Tag>
                상세 설명을 입력해주세요.
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeMenuInput
                {...props.register("description")}
              ></CafeContentsWrite.CafeMenuInput>
              <CafeContentsWrite.Tag>
                전화번호를 입력해주세요.
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNumberInput
                {...props.register("phone")}
              ></CafeContentsWrite.CafeNumberInput>
              <CafeContentsWrite.TimeAndFeeWrapper>
                <CafeContentsWrite.TimeWrapper>
                  <CafeContentsWrite.Tag>운영 시간</CafeContentsWrite.Tag>
                  <CafeContentsWrite.TimeInputWrapper>
                    <CafeContentsWrite.StartTimeInput
                      {...props.register("open")}
                    ></CafeContentsWrite.StartTimeInput>
                    <div>~</div>
                    <CafeContentsWrite.CloseTimeInput
                      {...props.register("close")}
                    ></CafeContentsWrite.CloseTimeInput>
                  </CafeContentsWrite.TimeInputWrapper>
                </CafeContentsWrite.TimeWrapper>
                <CafeContentsWrite.FeeWrapper>
                  <CafeContentsWrite.Tag>입장료</CafeContentsWrite.Tag>
                  <CafeContentsWrite.CafeFeeInput
                    {...props.register("entranceFee")}
                  ></CafeContentsWrite.CafeFeeInput>
                </CafeContentsWrite.FeeWrapper>
              </CafeContentsWrite.TimeAndFeeWrapper>
              <CafeContentsWrite.Tag>주소를 입력해주세요</CafeContentsWrite.Tag>
              <CafeContentsWrite.AddressInput placeholder="주소 검색하기"></CafeContentsWrite.AddressInput>
              <CafeContentsWrite.AddressDetailInput placeholder="상세주소 입력하기"></CafeContentsWrite.AddressDetailInput>
              <CafeContentsWrite.Tag>
                우리 업체 위치를 확인해주세요
              </CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1.7em",
                  width: "100%",
                  height: "300px",
                }}
              >
                <KakaoMap />
              </div>
              <CafeContentsWrite.Tag>위치 검색 키워드</CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1.7em",
                }}
              >
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="홍대">홍대</Radio.Button>
                  <Radio.Button value="강남">강남</Radio.Button>
                  <Radio.Button value="대학로">대학로</Radio.Button>
                  <Radio.Button value="건대">건대</Radio.Button>
                  <Radio.Button value="잠실">잠실</Radio.Button>
                </Radio.Group>
              </div>
            </>
          )}
          <CafeContentsWrite.ButtonWrapper>
            <CafeContentsWrite.PrevButton
              type="button"
              onClick={props.onClickPrev}
            >
              이전 단계
            </CafeContentsWrite.PrevButton>
            {!props.next ? (
              <CafeContentsWrite.NextButton
                type="button"
                onClick={props.onClickNext}
              >
                다음
              </CafeContentsWrite.NextButton>
            ) : (
              <CafeContentsWrite.SubmitButton>
                등록 완료
              </CafeContentsWrite.SubmitButton>
            )}
          </CafeContentsWrite.ButtonWrapper>
        </CafeContentsWrite.Wrapper>
      </form>
    </>
  );
}
