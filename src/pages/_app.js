import React from "react";
import Head from "next/head";
import Global from "../../styles/global.js";
import Layout from "../Components/Layout/index.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <title>Marcio Silva</title>
        <meta
          name="description"
          content="Página pessoal do baterista Marcio Silva"
        />

        <link
          rel="shortcut icon"
          href="/assets/MSicone1.png"
          type="image/png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
