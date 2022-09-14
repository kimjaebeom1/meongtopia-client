import { phoneBlind } from "../../../../../commons/libraries/utils";
import * as MyInfo from "./MyInfo.styles";
import { IMyPageUserMyInfoUIProps } from "./MyInfo.types";

const MENUS = ["이메일", "이름", "휴대폰 번호", "별명", "포인트"];

export default function MyPageUserMyInfoUI(props: IMyPageUserMyInfoUIProps) {
  const DATA_INDEX_VALUE = [
    props.data?.fetchUser.email,
    props.data?.fetchUser.name,
    props.data?.fetchUser.phone,
    props.data?.fetchUser.nickname,
  ];

  return (
    <MyInfo.Wrapper>
      <MyInfo.Container>
        <MyInfo.Title>회원정보 수정</MyInfo.Title>
        <MyInfo.List>
          <div>
            <MyInfo.Label>{MENUS[0]}</MyInfo.Label>
            <MyInfo.Data>{props.data?.fetchUser.email}</MyInfo.Data>
          </div>
        </MyInfo.List>
        <MyInfo.List>
          <div>
            <MyInfo.Label>{MENUS[1]}</MyInfo.Label>
            <MyInfo.Data>{props.data?.fetchUser.name}</MyInfo.Data>
          </div>
          <MyInfo.UpdateBtn id="1" onClick={props.onClickToUpdate}>
            {`${props.menuId === "1" ? "취소" : "수정"}`}
          </MyInfo.UpdateBtn>
        </MyInfo.List>
        <MyInfo.List>
          <div>
            <MyInfo.Label>{MENUS[2]}</MyInfo.Label>
            <MyInfo.Data>
              {phoneBlind(props.data?.fetchUser.phone || "")}
            </MyInfo.Data>
          </div>
          <MyInfo.UpdateBtn id="2" onClick={props.onClickToUpdate}>
            {`${props.menuId === "2" ? "취소" : "수정"}`}
          </MyInfo.UpdateBtn>
        </MyInfo.List>
        <MyInfo.List>
          <div>
            <MyInfo.Label>{MENUS[3]}</MyInfo.Label>
            <MyInfo.Data>{props.data?.fetchUser.nickname}</MyInfo.Data>
          </div>
          <MyInfo.UpdateBtn id="3" onClick={props.onClickToUpdate}>
            {`${props.menuId === "3" ? "취소" : "수정"}`}
          </MyInfo.UpdateBtn>
        </MyInfo.List>
        <MyInfo.List>
          <div>
            <MyInfo.Label>{MENUS[4]}</MyInfo.Label>
            <MyInfo.Data>{props.data?.fetchUser.point} 원</MyInfo.Data>
          </div>
        </MyInfo.List>
        <MyInfo.Footer>
          <MyInfo.UpdateBtn onClick={props.onClickToChangePwd}>
            비밀번호 변경
          </MyInfo.UpdateBtn>
          <MyInfo.UpdateBtn onClick={props.onClickDelete}>
            회원탈퇴
          </MyInfo.UpdateBtn>
        </MyInfo.Footer>
      </MyInfo.Container>

      {/* 수정 컴포넌트 */}
      {props.menuId && (
        <MyInfo.Container>
          <MyInfo.UpdateTitle>
            {MENUS[Number(props.menuId)]} 수정
          </MyInfo.UpdateTitle>
          <MyInfo.UpdateWrapper>
            <div>
              <MyInfo.Label>{MENUS[Number(props.menuId)]}</MyInfo.Label>
              <MyInfo.Input
                id="input"
                type="text"
                autoFocus={true}
                onChange={props.onChangeUpdate}
                defaultValue={DATA_INDEX_VALUE[Number(props.menuId)]}
              />
            </div>
            <div>
              <MyInfo.UpdateBtn onClick={props.onClickToUpdate}>
                취소하기
              </MyInfo.UpdateBtn>
              <MyInfo.UpdateBtn onClick={props.onClickUpdate}>
                수정하기
              </MyInfo.UpdateBtn>
            </div>
          </MyInfo.UpdateWrapper>
        </MyInfo.Container>
      )}

      {/* 비밀번호 변경 컴포넌트 */}
      {props.isChangePwd && (
        <MyInfo.Container>
          <MyInfo.UpdateTitle>비밀번호 변경</MyInfo.UpdateTitle>
          <MyInfo.UpdateWrapper>
            <div>
              <MyInfo.Label>비밀번호</MyInfo.Label>
              <MyInfo.Input
                type="password"
                autoFocus
                onChange={props.onChangePwd}
              />
            </div>
            <div>
              <MyInfo.Label>비밀번호 확인</MyInfo.Label>
              <MyInfo.Input
                type="password"
                onChange={props.onChangePwdConfirm}
              />
            </div>
          </MyInfo.UpdateWrapper>
          <MyInfo.ErrorMessage>{props.errorMessage}</MyInfo.ErrorMessage>
          <MyInfo.BtnContainer>
            <MyInfo.UpdateBtn onClick={props.onClickToChangePwd}>
              취소하기
            </MyInfo.UpdateBtn>
            <MyInfo.UpdateBtn onClick={props.onClickChangePwd}>
              변경하기
            </MyInfo.UpdateBtn>
          </MyInfo.BtnContainer>
        </MyInfo.Container>
      )}
    </MyInfo.Wrapper>
  );
}
