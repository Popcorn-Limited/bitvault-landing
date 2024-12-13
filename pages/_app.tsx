import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";


const { title, description, socialShareImage } = {
  title: "VaultCraft",
  description: "VaultCraft is a DeFi yield-optimizing protocol with customizable asset strategies that instantly zap your crypto from any chain into the highest yield-generating products across DeFi in 1 click.",
  socialShareImage: "https://www.popcorn.network/images/social_cover_image.png",
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
        <meta property="og:url" content="https://vaultcraft.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialShareImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vaultcraft.io" />
        <meta property="twitter:url" content="https://vaultcraft.io/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialShareImage} />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  );
}
