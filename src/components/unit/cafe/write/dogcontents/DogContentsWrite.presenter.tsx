import DogImgUpload from "../../../../commons/upload/dogimg/DogImgUpload.container";
import { v4 as uuidv4 } from "uuid";

import * as DogContentsWrite from "./DogContentsWrite.styles";
export default function DogContentsWriteUI(props: any) {
  return (
    <DogContentsWrite.Wrapper>
      <DogContentsWrite.Tag>우라카페 강아지 몇마리?</DogContentsWrite.Tag>
      <DogContentsWrite.DogCountWrapper>
        <DogContentsWrite.DogCount>
          대형견:
          <DogContentsWrite.BigDogCount
            defaultValue={props.data?.fetchStore.bigDog || ""}
            onChange={props.onChangeBigDog}
            type="number"
          ></DogContentsWrite.BigDogCount>
        </DogContentsWrite.DogCount>
        <DogContentsWrite.DogCount>
          소형견:
          <DogContentsWrite.SmallDogCount
            defaultValue={props.data?.fetchStore.smallDog || ""}
            onChange={props.onChangeSmallDog}
            type="number"
          ></DogContentsWrite.SmallDogCount>
        </DogContentsWrite.DogCount>
      </DogContentsWrite.DogCountWrapper>
      <DogContentsWrite.Tag>강아지 정보를 입력해주세요 </DogContentsWrite.Tag>
      <DogContentsWrite.DogAddWrapper>
        <DogImgUpload
          dogImage={props.dogImage}
          onChangeDogImage={props.onChangeDogImage}
        />
        <DogContentsWrite.DogProfileWrapper>
          <DogContentsWrite.DogName
            id="name"
            onChange={props.onChangeDogName}
            placeholder="강아지 이름을 적어주세요"
          ></DogContentsWrite.DogName>
          <DogContentsWrite.DogAge
            id="age"
            onChange={props.onChangeDogAge}
            placeholder="강아지 나이를 적어주세요"
          ></DogContentsWrite.DogAge>
          <DogContentsWrite.DogBreed
            id="breed"
            onChange={props.onChangeDogBreed}
            placeholder="견종을 적어주세요"
          ></DogContentsWrite.DogBreed>
          <DogContentsWrite.DogDesc
            id="desc"
            onChange={props.onChangeDogDescription}
            placeholder="강아지 성격을 적어주세요"
          ></DogContentsWrite.DogDesc>
        </DogContentsWrite.DogProfileWrapper>
      </DogContentsWrite.DogAddWrapper>
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
      {props.petArr.map((el: any) => (
        <>
          <DogContentsWrite.MobileDeleteBtn
            key={uuidv4()}
            onClick={props.onClickDelete(el)}
          >
            <img src="/images/delete.svg" alt="" />
          </DogContentsWrite.MobileDeleteBtn>
          <DogContentsWrite.DogListWrapper key={uuidv4()}>
            {el.petImgUrl ? (
              <DogContentsWrite.DogListImg
                src={`https://storage.googleapis.com/${el.petImgUrl}`}
              />
            ) : (
              <DogContentsWrite.DogListImg src="/images/dogcharacter.jpg" />
            )}

            <DogContentsWrite.DogListColumn>
              <div>이름: {el.name}</div>
              <div>나이: {el.age}</div>
              <div>견종: {el.breed}</div>
              <div>성격: {el.description}</div>
            </DogContentsWrite.DogListColumn>
            <DogContentsWrite.DeleteBtn onClick={props.onClickDelete(el)}>
              <img src="/images/delete.svg" alt="" />
            </DogContentsWrite.DeleteBtn>
          </DogContentsWrite.DogListWrapper>
        </>
      ))}
    </DogContentsWrite.Wrapper>
  );
}
