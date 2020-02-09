import { NextSeo } from "next-seo";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import "./app.module.css";
import config from '../../config';
import { getFrontMatter } from "../shared/util";

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, router, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
      ;

    const frontMatter = getFrontMatter(router);

    return {
      pageProps: {
        ...pageProps,
        seo: {
          ...frontMatter,
          ...config.seo,
        }
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextSeo  {...pageProps.seo} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp;