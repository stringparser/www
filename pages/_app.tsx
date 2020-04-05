import Head from "next/head";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import "./app.module.css";
import config from "../config";
import { getMeta } from "../shared/util";

import { bounds } from "../shared/components/styles";
import Navigation from "../shared/components/Navigation/Navigation";
import DocumentHead from "../shared/components/Document/Head";

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, router, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
      ;

    const meta = /^\/[a-z]/.test(router.route)
      ? getMeta(router.route)
      : {}
      ;

    return {
      pageProps: {
        ...config.defaults,
        ...pageProps,
        seo: {
          ...meta,
          ...config.seo,
        },
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DocumentHead {...config.defaults} />
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
        <style jsx>{`
          main {
            margin: 0 auto;
            max-width: ${bounds.maxWidth};
          }
        `}</style>
      </>
    )
  }
}

export default MyApp;