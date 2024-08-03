import type { AppProps } from "next/app";
import RootLayout from "./layout";
import "./styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
