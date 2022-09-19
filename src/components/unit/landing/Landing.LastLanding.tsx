import { useRouter } from "next/router";
import * as Landing from "./Landing.styles";

export default function LastLandingPage() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    router.push("/home");
  };

  return (
    <Landing.LastWrapper>
      <Landing.Wrapper>
        <Landing.Logo src="/images/newlogo.png" />
        <div>
          <Landing.Text onClick={onClickMoveToHome}>들어가기</Landing.Text>
        </div>
      </Landing.Wrapper>
    </Landing.LastWrapper>
  );
}
