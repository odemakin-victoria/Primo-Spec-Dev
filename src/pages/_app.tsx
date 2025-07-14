import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {

 
  return (
      <Component {...pageProps} />
  );
}
