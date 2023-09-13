import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import Layout from "@/components/layout";

Amplify.configure({ ...awsExports, ssr: true });

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withAuthenticator(App);
