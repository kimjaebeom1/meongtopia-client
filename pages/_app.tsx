import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import ChatBot from "../src/components/commons/chatbot";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
            <ChatBot />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
