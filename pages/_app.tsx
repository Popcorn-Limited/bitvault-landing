import Head from "next/head";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { ModalProvider } from "@/components/modal/ModalService";


const { title, description, socialShareImage } = {
  title: "BitVault",
  description: "A stablecoin earning secure, risk-adjusted yield",
  socialShareImage: "/images/socialShare.png",
};

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export default function MyApp(props: any) {
  const { Component, pageProps } = props;
  const getLayout =
    Component.getLayout ||
    (() => (
      <Component {...pageProps} />
    ));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={description} />

        {/*  Facebook Meta Tags */}
        <meta property="og:url" content="https://bitvault.finance/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialShareImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bitvault.finance" />
        <meta property="twitter:url" content="https://bitvault.finance/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialShareImage} />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ModalProvider>
        {getLayout(<Component {...pageProps} />)}
      </ModalProvider>
    </React.Fragment>
  );
}
