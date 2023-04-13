import type { AppProps } from "next/app";
import "@/styles/global.css";
import "@/styles/theme.css";
import "@/styles/dark.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
