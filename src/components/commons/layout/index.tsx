import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

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
  return (
    <LayoutWrapper>
      {/* <LayoutHeader /> */}
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </LayoutWrapper>
  );
}
