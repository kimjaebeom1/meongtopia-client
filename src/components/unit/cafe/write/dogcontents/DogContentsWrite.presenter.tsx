import DogImgUpload from "../../../../commons/upload/dogimg/DogImgUpload.container";
import * as DogContentsWrite from "./DogContentsWrite.styles";
export default function DogContentsWriteUI(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <DogImgUpload
          dogImage={props.dogImage}
          onChangeDogImage={props.onChangeDogImage}
        />
        <DogContentsWrite.DogProfileWrapper>
          <DogContentsWrite.DogName
            onChange={props.onChangeDogName}
            placeholder="강아지 이름을 적어주세요"
          ></DogContentsWrite.DogName>
          <DogContentsWrite.DogAge
            onChange={props.onChangeDogAge}
            placeholder="강아지 나이를 적어주세요"
          ></DogContentsWrite.DogAge>
          <DogContentsWrite.DogBreed
            onChange={props.onChangeDogBreed}
            placeholder="견종을 적어주세요"
          ></DogContentsWrite.DogBreed>
          <DogContentsWrite.DogDesc
            onChange={props.onChangeDogDescription}
            placeholder="강아지 성격을 적어주세요"
          ></DogContentsWrite.DogDesc>
        </DogContentsWrite.DogProfileWrapper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DogContentsWrite.AddDogBtn onClick={props.onClickAddDog} type="button">
          강아지 추가하기
        </DogContentsWrite.AddDogBtn>
      </div>

      <DogContentsWrite.Tag>옵션 검색 키워드</DogContentsWrite.Tag>
      <DogContentsWrite.OptionWrapper>
        <DogContentsWrite.WithDogBtn
          type="button"
          withDog={props.withDog}
          value="애견동반 가능"
          onClick={props.onClickWithDog}
        >
          애견동반 가능
        </DogContentsWrite.WithDogBtn>
        <DogContentsWrite.YardBtn
          yard={props.yard}
          type="button"
          value="야외마당 있음"
          onClick={props.onClickYard}
        >
          야외마당 있음
        </DogContentsWrite.YardBtn>
        <DogContentsWrite.LargeDogBtn
          type="button"
          largeDog={props.largeDog}
          value="대형견 있음"
          onClick={props.onClickLargeDog}
        >
          대형견 있음
        </DogContentsWrite.LargeDogBtn>
      </DogContentsWrite.OptionWrapper>
    </>
  );
}
