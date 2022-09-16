import * as UserPick from "./UserPick.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { IMyPageUserPickUIProps } from "./UserPick.types";
import { v4 as uuidv4 } from "uuid";

export default function MyPageUserPickUI(props: IMyPageUserPickUIProps) {
  return (
    <UserPick.Wrapper>
      <UserPick.PageTitle>내가 찜한 목록</UserPick.PageTitle>
      {props.data?.fetchUser.pick
        .filter((_, i) => i < Number(props.add) * 2)
        .map((el) => (
          <UserPick.ListWrapper key={uuidv4()}>
            {el.store?.storeImg?.[0].url ? (
              <UserPick.Img
                src={`https://storage.googleapis.com/${el.store?.storeImg?.[0].url}`}
              />
            ) : (
              <UserPick.Img src="/images/dogcharacter.jpg" />
            )}
            <UserPick.UserList>
              <UserPick.ContentsText>
                <UserPick.Title>{el.store?.name}</UserPick.Title>
                <UserPick.RatingWrapper>
                  <Rate value={el.store?.avgRating} disabled />
                  <span style={{ marginLeft: "0.5rem" }}>
                    {el.store?.avgRating}
                  </span>
                </UserPick.RatingWrapper>
              </UserPick.ContentsText>

              <UserPick.Horizon />
              <UserPick.ContentsText>
                <UserPick.SelectTag>
                  {el.store?.storeTag.map((el) => (
                    <span
                      key={el.tagID}
                      style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
                    >{`# ${el.name}`}</span>
                  ))}
                </UserPick.SelectTag>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <UserPick.Heart />
                  {el.store?.pickCount}
                </span>
              </UserPick.ContentsText>
              <UserPick.ContentsText>
                <span>{el.store?.address}</span>
              </UserPick.ContentsText>
              <UserPick.ContentsText>
                <span>{`${el.store?.open} ~ ${el.store?.close}`}</span>
                <span
                  style={{ fontSize: "1.2rem" }}
                >{`입장료 ${el.store?.entranceFee.toLocaleString()}원`}</span>
              </UserPick.ContentsText>
            </UserPick.UserList>
            <UserPick.Reserve
              id={el.store?.storeID}
              onClick={props.onClickToReserve}
            >
              바로가기
            </UserPick.Reserve>
          </UserPick.ListWrapper>
        ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.data?.fetchUser.pick[0] ? (
          Number(props.add) * 2 < props.data?.fetchUser.pick.length && (
            <UserPick.AddBtn onClick={props.onClickAdd}>더보기</UserPick.AddBtn>
          )
        ) : (
          <h2>찜한 목록이 없습니다.</h2>
        )}
      </div>
    </UserPick.Wrapper>
  );
}
