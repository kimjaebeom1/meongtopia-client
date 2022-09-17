import Link from "next/link";
import * as MyCafe from "./MyCafe.styles";

export default function MyPageStoreMyCafeUI() {
  return (
    <MyCafe.Wrapper>
      <MyCafe.PageTitle>내 카페</MyCafe.PageTitle>
      <Link href="/cafe/new">
        <a>카페 등록</a>
      </Link>
    </MyCafe.Wrapper>
  );
}
