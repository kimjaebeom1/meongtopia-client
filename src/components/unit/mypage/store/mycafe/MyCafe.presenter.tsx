import Link from "next/link";
import * as MyCafe from "./MyCafe.styles";
import { IMyPageStoreMyCafeUIProps } from "./MyCafe.types";
import { Rate } from "antd";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";

export default function MyPageStoreMyCafeUI(props: IMyPageStoreMyCafeUIProps) {
  return (
    <MyCafe.Wrapper>
      <MyCafe.Header>
        <MyCafe.PageTitle>내 카페</MyCafe.PageTitle>
        <Link href="/cafe/new">
          <MyCafe.Link>카페 등록</MyCafe.Link>
        </Link>
      </MyCafe.Header>
      {props.data?.fetchOwnerStores
        .filter((_: any, i: number) => i < Number(props.add) * 2)
        .map((el: any) => (
          <MyCafe.ListWrapper key={uuidv4()}>
            {el.storeImg?.[0].url ? (
              <MyCafe.Img
                src={`https://storage.googleapis.com/${el.storeImg?.[0].url}`}
              />
            ) : (
              <MyCafe.Img src="/images/dogcharacter.jpg" />
            )}
            <MyCafe.UserList id={el.storeID} onClick={props.onClickToDetail}>
              <MyCafe.ContentsText>
                <MyCafe.Title>{el.name}</MyCafe.Title>
                <MyCafe.RatingWrapperMobile>
                  <MyCafe.Star />
                  <span style={{ marginLeft: "0.5rem" }}>{el.avgRating}</span>
                </MyCafe.RatingWrapperMobile>
                <MyCafe.RatingWrapper>
                  <Rate value={el.avgRating} disabled />
                  <span style={{ marginLeft: "0.5rem" }}>{el.avgRating}</span>
                </MyCafe.RatingWrapper>
              </MyCafe.ContentsText>

              <MyCafe.Horizon />
              <MyCafe.ContentsText>
                <MyCafe.SelectTag>
                  {el.storeTag.map((el: any) => (
                    <span
                      key={el.tagID}
                      style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
                    >{`# ${el.name}`}</span>
                  ))}
                </MyCafe.SelectTag>
                <MyCafe.PickWrapper>
                  <MyCafe.Heart />
                  {el.pickCount}
                </MyCafe.PickWrapper>
              </MyCafe.ContentsText>
              <MyCafe.ContentsText>
                <span>{el.address}</span>
                <MyCafe.PickWrapperMobile>
                  <MyCafe.Heart />
                  {el.pickCount}
                </MyCafe.PickWrapperMobile>
              </MyCafe.ContentsText>
              <MyCafe.ContentsText>
                <span>{`${el.open} ~ ${el.close}`}</span>
                <span
                  style={{ fontSize: "1.2rem" }}
                >{`입장료 ${el.entranceFee.toLocaleString()}원`}</span>
              </MyCafe.ContentsText>
            </MyCafe.UserList>
            <MyCafe.BtnWrapper>
              <MyCafe.BtnDetail id={el.storeID} onClick={props.onClickToEdit}>
                수정하기
              </MyCafe.BtnDetail>
              <MyCafe.BtnDelete id={el.storeID} onClick={props.onClickDelete}>
                삭제하기
              </MyCafe.BtnDelete>
            </MyCafe.BtnWrapper>
          </MyCafe.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.data?.fetchOwnerStores ? (
          Number(props.add) * 2 <
            props.data?.fetchOwnerStores.map((el: any) => el[0]).length && (
            <MyCafe.AddBtn onClick={props.onClickAdd}>더보기</MyCafe.AddBtn>
          )
        ) : (
          <h2>등록한 카페가 없습니다.</h2>
        )}
      </div>
    </MyCafe.Wrapper>
  );
}
