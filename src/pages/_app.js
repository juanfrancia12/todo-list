import Layout from "@common/components/templates/layout";
import Spinner from "@common/components/molecules/Spinner";

import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import "../../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      SetLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      SetLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>LISTA DE TAREAS</title>
      </Head>
      <Layout>{loading ? <Spinner /> : <Component {...pageProps} />}</Layout>
    </>
  );
}

export default MyApp;
