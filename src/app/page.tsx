import { AppProps } from "next/app";
import { FC } from "react";

const AppContainer: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default AppContainer;
