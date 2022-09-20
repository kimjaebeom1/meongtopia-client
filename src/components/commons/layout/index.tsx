import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigator from "./navigator";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.main`
  width: 100%;
  margin: auto;
`;

const LayoutBody = styled.section`
  width: 100%;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const HIDDEN_HEADER = ["/"];
  const HIDDEN_FOOTER = ["/", "/login/", "/signup/", "/signup/owner/"];
  const HIDDEN_NAVIGATOR = ["/"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHiddenNavigator = HIDDEN_NAVIGATOR.includes(router.asPath);
  return (
    <LayoutWrapper>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBody>{props.children}</LayoutBody>
      {!isHiddenFooter && <LayoutFooter />}
      {!isHiddenNavigator && <LayoutNavigator />}
    </LayoutWrapper>
  );
}
