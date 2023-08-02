import Head from "next/head";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import { Loader } from "@/components/Sections";

const { title, description, socialShareImage } = {
  title: "Popcorn - Yield That Counts",
  description: "Popcorn is a regenerative yield optimizing protocol.",
  socialShareImage: "https://www.popcorn.network/images/social_cover_image.png",
};

export default function MyApp(props) {
  const [isLoading, setLoading] = useState(true);
  const [isLoaderAnimationDone, setLoaderAnimationDone] = useState(false);

  const { Component, pageProps } = props;
  const getLayout =
    Component.getLayout ||
    (() => (
      <Component {...pageProps} isLoaded={isLoaderAnimationDone} />
    ));

  useEffect(() => setLoading(false))

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="description" content={description} />

          {/*  Facebook Meta Tags */}
          <meta property="og:url" content="https://popcorn.network/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={socialShareImage} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="popcorn.network" />
          <meta property="twitter:url" content="https://popcorn.network/" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={socialShareImage} />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
        <Loader isLoading={isLoading} endLoadingAnimation={() => setLoaderAnimationDone(true)} />
      </React.Fragment>
  );
}
