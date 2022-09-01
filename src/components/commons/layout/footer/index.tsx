import * as Footer from "./Footer.styles";

export default function LayoutFooter() {
  return (
    <Footer.Container>
      <Footer.Wrapper>
        <Footer.InfoWrapper>
          <Footer.Title>멍토피아</Footer.Title>
          <Footer.Contents>대표: 멍멍이 없는 멍멍2조</Footer.Contents>
          <Footer.Contents>사업자 등록번호: 123-45-67890</Footer.Contents>
          <Footer.Contents>
            주소: 서울시 구로구 디지털로 300 (우)08379 13층
          </Footer.Contents>
          <Footer.Contents>전화번호: 070-1234-5678</Footer.Contents>
          <Footer.Contents>이메일: meonghelp@meongtopia.shop</Footer.Contents>
          <Footer.Contents>
            업무시간: 평일 10:00~18:00 / 주말 및 공휴일 휴무
          </Footer.Contents>
          <Footer.Copyright>
            Copyright © MEONGTOPIA All rights reserved.
          </Footer.Copyright>
        </Footer.InfoWrapper>
        <Footer.CSWrapper>
          <Footer.MenuWrapper>
            <Footer.Title>서비스에 대하여</Footer.Title>
            <Footer.Menu>서비스 소개</Footer.Menu>
            <Footer.Menu>이용약관</Footer.Menu>
            <Footer.Menu>개인정보 처리방침</Footer.Menu>
            <Footer.Menu>고객지원</Footer.Menu>
          </Footer.MenuWrapper>
          <Footer.MenuWrapper>
            <Footer.Title>회사에 대하여</Footer.Title>
            <Footer.Menu>회사 소개</Footer.Menu>
            <Footer.Menu>채용 공고</Footer.Menu>
            <Footer.Menu>비즈니스 제휴</Footer.Menu>
            <Footer.SNSWrapper>
              <Footer.Instagram />
              <Footer.Facebook />
              <Footer.NaverBlog />
              <Footer.Youtube />
            </Footer.SNSWrapper>
          </Footer.MenuWrapper>
        </Footer.CSWrapper>
      </Footer.Wrapper>
    </Footer.Container>
  );
}
