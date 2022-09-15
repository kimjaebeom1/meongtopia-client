import * as CafeContentsWrite from "./CafeContentsWrite.styles";
import CafeImgUpload from "../../../../commons/upload/cafeimg/CafeImgUpload.container";
import KakaoMap from "../../../../commons/map";
import "antd/dist/antd.css";
import DogContentsWrite from "../dogcontents/DogContentsWrite.container";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { ICafeContentsWriteUIProps } from "./CafeContentsWrite.types";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
import React from "react";

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

        {props.next && <DogContentsWrite />}
        <form onSubmit={props.handleSubmit(props.onClickCreateStore)}>
          {!props.next && (
            <>
              <CafeContentsWrite.Tag>
                카페 이름을 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNameInput
                required
                placeholder="OO 애견카페"
                {...props.register("name")}
              ></CafeContentsWrite.CafeNameInput>
              <CafeContentsWrite.ErrorTag>
                {props.formState.errors.name?.message}
              </CafeContentsWrite.ErrorTag>

              <CafeContentsWrite.Tag>
                카페 이미지를 추가해주세요 (최대 5장)
                <CafeContentsWrite.MobileUploadWrapper>
                  <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                      maxCount={5}
                      multiple
                    >
                      <Button icon={<UploadOutlined />}>
                        사진 추가 (최대 5장)
                      </Button>
                    </Upload>
                  </Space>
                </CafeContentsWrite.MobileUploadWrapper>
                <CafeContentsWrite.ImageUploadWrapper>
                  {props.fileUrls.map((el, index) => (
                    <CafeImgUpload
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
                  defaultValue=""
                  editorRef={props.editorRef}
                  onChangeDescription={props.onChangeDescription}
                />
                {props.description === "<p><br></p>" || "" ? (
                  <CafeContentsWrite.ErrorTag>
                    가게 설명을 입력해주세요
                  </CafeContentsWrite.ErrorTag>
                ) : (
                  ""
                )}
              </CafeContentsWrite.ToastWrapper>
              <CafeContentsWrite.Tag>
                전화번호를 입력해주세요
              </CafeContentsWrite.Tag>
              <CafeContentsWrite.CafeNumberInput
                placeholder="010-1234-5678"
                {...props.register("phone")}
              ></CafeContentsWrite.CafeNumberInput>
              <CafeContentsWrite.ErrorTag>
                {props.formState.errors.phone?.message}
              </CafeContentsWrite.ErrorTag>
              <CafeContentsWrite.TimeAndFeeWrapper>
                <CafeContentsWrite.TimeWrapper>
                  <CafeContentsWrite.Tag>운영 시간</CafeContentsWrite.Tag>
                  <CafeContentsWrite.TimeInputWrapper>
                    <CafeContentsWrite.StartTimeInput
                      placeholder="08:00"
                      {...props.register("open")}
                    ></CafeContentsWrite.StartTimeInput>

                    <div>~</div>
                    <CafeContentsWrite.CloseTimeInput
                      placeholder="21:00"
                      {...props.register("close")}
                    ></CafeContentsWrite.CloseTimeInput>
                  </CafeContentsWrite.TimeInputWrapper>
                </CafeContentsWrite.TimeWrapper>

                <CafeContentsWrite.FeeWrapper>
                  <CafeContentsWrite.Tag>입장료</CafeContentsWrite.Tag>
                  <CafeContentsWrite.CafeFeeInput
                    placeholder="5000"
                    {...props.register("entranceFee")}
                  ></CafeContentsWrite.CafeFeeInput>
                </CafeContentsWrite.FeeWrapper>
              </CafeContentsWrite.TimeAndFeeWrapper>
              <CafeContentsWrite.TimeAndFeeErrorWrapper>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.open?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.close?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.entranceFee?.message}
                </CafeContentsWrite.ErrorTag>
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
                  value={props.address}
                  {...props.register("address")}
                  placeholder="주소 검색하기"
                ></CafeContentsWrite.AddressInput>
                <CafeContentsWrite.ErrorTag>
                  {props.formState.errors.address?.message}
                </CafeContentsWrite.ErrorTag>
                <CafeContentsWrite.AddressBtn
                  onClick={props.onClickAddressModal}
                  type="button"
                >
                  검색하기
                </CafeContentsWrite.AddressBtn>
              </div>
              <CafeContentsWrite.AddressDetailInput
                type="text"
                {...props.register("addressDetail")}
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
                formState={props.formState}
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
              >
                등록 완료
              </CafeContentsWrite.SubmitButton>
            )}
          </CafeContentsWrite.ButtonWrapper>
        </form>
      </CafeContentsWrite.Wrapper>

      {props.isOpen && (
        <CafeContentsWrite.AddressModal
          onOk={props.handleOk}
          onCancel={props.closeModal}
          visible={true}
        >
          <CafeContentsWrite.AddressSearchInput
            onComplete={props.onCompleteAddressSearch}
          />
        </CafeContentsWrite.AddressModal>
      )}
    </>
  );
}
