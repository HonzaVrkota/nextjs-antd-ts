import type { AppProps } from "next/app";
import "../styles/antd-theme.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
