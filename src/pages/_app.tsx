import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  console.log("mock running");
  require("../../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
