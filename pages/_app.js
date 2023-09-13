import Head from "next/head";
import React from "react";
import Script from "next/script";

function CustomApp({ Component, pageProps, router }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Q1JHZG4Z5F`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Q1JHZG4Z5F', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;