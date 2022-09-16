import * as UserPick from "./UserPick.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { IMyPageUserPickUIProps } from "./UserPick.types";
import { v4 as uuidv4 } from "uuid";

export default function MyPageUserPickUI(props: IMyPageUserPickUIProps) {
  return (
    <UserPick.Wrapper>
      {props.data?.fetchPicks.map((el) => (
        <UserPick.ListWrapper key={uuidv4()}>
          {el.storeImg?.[0].url ? (
            <UserPick.Img
              src={`https://storage.googleapis.com/${el.storeImg?.[0].url}`}
            />
          ) : (
            <UserPick.Img src="/images/dogcharacter.jpg" />
          )}
          <UserPick.UserList>
            <UserPick.ContentsText>
              <UserPick.Title>{el.name}</UserPick.Title>
              <UserPick.RatingWrapper>
                <Rate value={el.avgRating} disabled />
                <span style={{ marginLeft: "0.5rem" }}>{el.avgRating}</span>
              </UserPick.RatingWrapper>
            </UserPick.ContentsText>

            <UserPick.Horizon />
            <UserPick.ContentsText>
              <UserPick.SelectTag>
                {el.storeTag.map((el) => (
                  <span
                    key={el.tagID}
                    style={{ marginRight: "0.5rem", fontSize: "0.9rem" }}
                  >{`# ${el.name}`}</span>
                ))}
              </UserPick.SelectTag>
              <span style={{ display: "flex", alignItems: "center" }}>
                <UserPick.Heart />
                {el.pickCount}
              </span>
            </UserPick.ContentsText>
            <UserPick.ContentsText>
              <span>{el.address}</span>
            </UserPick.ContentsText>
            <UserPick.ContentsText>
              <span>{`${el.open} ~ ${el.close}`}</span>
              <span
                style={{ fontSize: "1.2rem" }}
              >{`입장료 ${el.entranceFee.toLocaleString()}원`}</span>
            </UserPick.ContentsText>
          </UserPick.UserList>
          <UserPick.Reserve id={el.storeID} onClick={props.onClickToReserve}>
            예약하기
          </UserPick.Reserve>
        </UserPick.ListWrapper>
      ))}
    </UserPick.Wrapper>
  );
}
