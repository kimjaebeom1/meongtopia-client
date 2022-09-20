import * as CafeContentsWrite from "./CafeContentsWrite.styles";
import CafeImgUpload from "../../../../commons/upload/cafeimg/CafeImgUpload.container";
import KakaoMap from "../../../../commons/map";
import "antd/dist/antd.css";
import DogContentsWrite from "../dogcontents/DogContentsWrite.container";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { v4 as uuidv4 } from "uuid";
import { ICafeContentsWriteUIProps } from "./CafeContentsWrite.types";

const ToastEditor = dynamic(() => import("../../../../commons/toast/Toast"), {
  ssr: false,
});

const LOCATION_TAGS = ["홍대", "강남", "대학로", "건대", "잠실"];
const CONDITION_TAGS = [
  "애견동반 가능",
  "야외마당 있음",
  "대형견 있음",
  "아이동반 가능",
];

export default function CafeContentsWriteUI(props: ICafeContentsWriteUIProps) {
  return (
    <>
      <CafeContentsWrite.Wrapper>
        <CafeContentsWrite.ProcedureWrapper>
          <CafeContentsWrite.Procedure01 next={props.next}>
            01. 카페정보 입력
          </CafeContentsWrite.Procedure01>
          <CafeContentsWrite.Procedure02 next={props.next}>
            02. 강아지정보 입력
          </CafeContentsWrite.Procedure02>
        </CafeContentsWrite.ProcedureWrapper>
        <CafeContentsWrite.ProcedureUnderBar>
          <CafeContentsWrite.ProcedureUnderBar01 next={props.next} />

          <CafeContentsWrite.ProcedureUnderBar02 next={props.next} />
        </CafeContentsWrite.ProcedureUnderBar>

        {props.next && <DogContentsWrite data={props.data} />}
        <>
          {!props.next && (
            <>
              <CafeContentsWrite.Tag>
                카페 이름을 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNameInput
                id="name"
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchStore.name || ""}
                required
                placeholder="OO 애견카페"
                // {...props.register("name")}
              ></CafeContentsWrite.CafeNameInput>
              <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>

              <CafeContentsWrite.Tag>
                카페 사진을 추가해주세요
                <CafeContentsWrite.ImageUploadWrapper>
                  {props.fileUrls.map((el: any, index: any) => (
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
                상세 설명을 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.ToastWrapper>
                <ToastEditor
                  defaultValue={props.data?.fetchStore.description}
                  editorRef={props.editorRef}
                  onChangeDescription={props.onChangeDescription}
                />
                {props.description === "<p><br></p>" || "" ? (
                  <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
                ) : (
                  ""
                )}
              </CafeContentsWrite.ToastWrapper>
              <CafeContentsWrite.Tag>
                전화번호를 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNumberInput
                id="phone"
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchStore.phone || ""}
                placeholder="010-1234-5678"
                // {...props.register("phone")}
              ></CafeContentsWrite.CafeNumberInput>
              <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
              <CafeContentsWrite.TimeAndFeeWrapper>
                <CafeContentsWrite.TimeWrapper>
                  <CafeContentsWrite.Tag>운영 시간</CafeContentsWrite.Tag>
                  <CafeContentsWrite.TimeInputWrapper>
                    <CafeContentsWrite.StartTimeInput
                      defaultValue={props.data?.fetchStore.open || ""}
                      placeholder="08:00"
                      id="open"
                      onChange={props.onChangeInputs}
                      // {...props.register("open")}
                    ></CafeContentsWrite.StartTimeInput>

                    <div>~</div>
                    <CafeContentsWrite.CloseTimeInput
                      defaultValue={props.data?.fetchStore.close || ""}
                      placeholder="21:00"
                      id="close"
                      onChange={props.onChangeInputs}
                      // {...props.register("close")}
                    ></CafeContentsWrite.CloseTimeInput>
                  </CafeContentsWrite.TimeInputWrapper>
                </CafeContentsWrite.TimeWrapper>

                <CafeContentsWrite.FeeWrapper>
                  <CafeContentsWrite.Tag>입장료</CafeContentsWrite.Tag>
                  <CafeContentsWrite.CafeFeeInput
                    defaultValue={props.data?.fetchStore.entranceFee || ""}
                    placeholder="5000"
                    onChange={props.onChangeEntranceFee}
                    // {...props.register("entranceFee")}
                  ></CafeContentsWrite.CafeFeeInput>
                </CafeContentsWrite.FeeWrapper>
              </CafeContentsWrite.TimeAndFeeWrapper>
              <CafeContentsWrite.TimeAndFeeErrorWrapper>
                <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
              </CafeContentsWrite.TimeAndFeeErrorWrapper>
              <CafeContentsWrite.Tag>주소를 입력해주세요</CafeContentsWrite.Tag>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CafeContentsWrite.AddressInput
                  readOnly
                  value={props.address || props.data?.fetchStore.address}
                  id="address"
                  onChange={props.onChangeInputs}
                  placeholder="주소 검색하기"
                ></CafeContentsWrite.AddressInput>
                <CafeContentsWrite.ErrorTag></CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.AddressBtn
                  onClick={props.onClickAddressModal}
                  type="button"
                >
                  검색하기
                </CafeContentsWrite.AddressBtn>
              </div>
              <CafeContentsWrite.AddressDetailInput
                defaultValue={props.data?.fetchStore.addressDetail || ""}
                type="text"
                id="addressDetail"
                onChange={props.onChangeInputs}
                placeholder="상세주소 입력하기"
              ></CafeContentsWrite.AddressDetailInput>
              <CafeContentsWrite.Tag>
                우리 업체 위치를 확인해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.MapWrapper>
                <KakaoMap address={props.address} />
              </CafeContentsWrite.MapWrapper>
              <CafeContentsWrite.Tag>위치 검색 키워드</CafeContentsWrite.Tag>
              <div
                style={{
                  marginTop: "1.7em",
                }}
              >
                <CafeContentsWrite.LocationWrapper>
                  {LOCATION_TAGS.map((el) => (
                    <CafeContentsWrite.StoreTag
                      defaultValue={props.data?.fetchStore.locationTag || ""}
                      id={el}
                      key={el}
                      isActive={props.locationActive === el}
                      onClick={props.onClickLocationTag}
                    >
                      {el}
                    </CafeContentsWrite.StoreTag>
                  ))}
                </CafeContentsWrite.LocationWrapper>
              </div>

              <CafeContentsWrite.Tag>옵션 검색 키워드</CafeContentsWrite.Tag>
              <CafeContentsWrite.OptionWrapper>
                {CONDITION_TAGS.map((el) => (
                  <CafeContentsWrite.StoreTag
                    defaultValue={props.data?.fetchStore.storeTag || ""}
                    id={el}
                    key={el}
                    isActive={props.conditionActive.includes(el)}
                    onClick={props.onClickConditionTag}
                  >
                    {el}
                  </CafeContentsWrite.StoreTag>
                ))}
              </CafeContentsWrite.OptionWrapper>
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
                fileUrls={props.fileUrls}
                locationActive={props.locationActive}
                conditionActive={props.conditionActive}
                description={props.description}
                type="button"
                onClick={props.onClickNext}
              >
                다음
              </CafeContentsWrite.NextButton>
            ) : (
              <CafeContentsWrite.SubmitButton
                petArr={props.petArr}
                bigDog={props.bigDog}
                smallDog={props.smallDog}
                onClick={
                  props.isEdit
                    ? props.onClickUpdateStore
                    : props.onClickCreateStore
                }
              >
                등록 완료
              </CafeContentsWrite.SubmitButton>
            )}
          </CafeContentsWrite.ButtonWrapper>
        </>
      </CafeContentsWrite.Wrapper>

      {props.isOpen && (
        <CafeContentsWrite.AddressModal
          onOk={props.handleOk}
          onCancel={props.closeModal}
          open={true}
        >
          <CafeContentsWrite.AddressSearchInput
            onComplete={props.onCompleteAddressSearch}
          />
        </CafeContentsWrite.AddressModal>
      )}
    </>
  );
}
