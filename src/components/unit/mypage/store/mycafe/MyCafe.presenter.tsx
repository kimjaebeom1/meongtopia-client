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
      {props.data?.fetchIncomes
        .filter((el: []) => el.length)
        .map((el: any) => el[0])
        .filter((_: any, i: number) => i < Number(props.add) * 2)
        .map((el: any) => (
          <MyCafe.ListWrapper key={uuidv4()}>
            {el.store?.storeImg?.[0].url ? (
              <MyCafe.Img
                src={`https://storage.googleapis.com/${el.store?.storeImg?.[0].url}`}
              />
            ) : (
              <MyCafe.Img src="/images/dogcharacter.jpg" />
            )}
            <MyCafe.UserList>
              <MyCafe.ContentsText>
                <MyCafe.Title>{el.store?.name}</MyCafe.Title>
                <MyCafe.RatingWrapperMobile>
                  <MyCafe.Star />
                  <span style={{ marginLeft: "0.5rem" }}>
                    {el.store?.avgRating}
                  </span>
                </MyCafe.RatingWrapperMobile>
                <MyCafe.RatingWrapper>
                  <Rate value={el.store?.avgRating} disabled />
                  <span style={{ marginLeft: "0.5rem" }}>
                    {el.store?.avgRating}
                  </span>
                </MyCafe.RatingWrapper>
              </MyCafe.ContentsText>

              <MyCafe.Horizon />
              <MyCafe.ContentsText>
                <MyCafe.SelectTag>
                  {el.store?.storeTag.map((el: any) => (
                    <span
                      key={el.tagID}
                      style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
                    >{`# ${el.name}`}</span>
                  ))}
                </MyCafe.SelectTag>
                <MyCafe.PickWrapper>
                  <MyCafe.Heart />
                  {el.store?.pickCount}
                </MyCafe.PickWrapper>
              </MyCafe.ContentsText>
              <MyCafe.ContentsText>
                <span>{el.store?.address}</span>
                <MyCafe.PickWrapperMobile>
                  <MyCafe.Heart />
                  {el.store?.pickCount}
                </MyCafe.PickWrapperMobile>
              </MyCafe.ContentsText>
              <MyCafe.ContentsText>
                <span>{`${el.store?.open} ~ ${el.store?.close}`}</span>
                <span
                  style={{ fontSize: "1.2rem" }}
                >{`입장료 ${el.store?.entranceFee.toLocaleString()}원`}</span>
              </MyCafe.ContentsText>
            </MyCafe.UserList>
            <MyCafe.BtnWrapper>
              <MyCafe.BtnDetail
                id={el.store?.storeID}
                onClick={props.onClickToDetail}
              >
                상세정보
              </MyCafe.BtnDetail>
              <MyCafe.BtnDelete
                id={el.store?.storeID}
                onClick={props.onClickDelete}
              >
                삭제하기
              </MyCafe.BtnDelete>
            </MyCafe.BtnWrapper>
          </MyCafe.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.data?.fetchIncomes ? (
          Number(props.add) * 2 <
            props.data?.fetchIncomes
              .filter((el: []) => el.length)
              .map((el: any) => el[0]).length && (
            <MyCafe.AddBtn onClick={props.onClickAdd}>더보기</MyCafe.AddBtn>
          )
        ) : (
          <h2>등록한 카페가 없습니다.</h2>
        )}
      </div>
    </MyCafe.Wrapper>
  );
}
