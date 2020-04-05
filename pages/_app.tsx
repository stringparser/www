import Head from "next/head";
import App, { AppContext, AppInitialProps, AppProps } from "next/app";

import "./app.module.css";
import config from "../config";

import Navigation from "../shared/components/Navigation";
import { getMeta, getSlug } from "../shared/util";

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

    const slug = getSlug(router.route);

    return {
      pageProps: {
        ...config.defaults,
        ...pageProps,
        seo: {
          ...meta,
          ...config.seo,
        },
        slug,
      }
    };
  }

  render() {
    const {
      pageTitle,
      primaryColor,
    } = config.defaults;

    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="icon"
            href="/static/icons/favicon.ico"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-57x57.png"
            sizes="57x57"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-60x60.png"
            sizes="60x60"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-72x72.png"
            sizes="72x72"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-76x76.png"
            sizes="76x76"
          />

          <link
            rel="icon"
            href="/static/icons/favicon-16x16.png"
            type="image/png"
            sizes="16x16"
          />

          <link
            rel="icon"
            href="/static/icons/favicon-32x32.png"
            type="image/png"
            sizes="32x32"
          />

          <link
            rel="icon"
            type="image/png"
            href="/static/icons/favicon-96x96.png"
            sizes="96x96"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-114x114.png"
            sizes="114x114"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-120x120.png"
            sizes="120x120"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-144x144.png"
            sizes="144x144"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-152x152.png"
            sizes="152x152"
          />

          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-icon-180x180.png"
            sizes="180x180"
          />

          <link
            rel="icon"
            href="/static/icons/android-icon-192x192.png"
            type="image/png"
            sizes="192x192"
          />

          <meta
            name="msapplication-TileImage"
            content="/static/icons/ms-icon-144x144.png"
          />

          <meta
            name="theme-color"
            content={primaryColor}
          />

          <meta
            name="apple-mobile-web-app-title"
            content={pageTitle}
          />

          <meta
            name="msapplication-TileColor"
            content={primaryColor}
          />

          <title>
            {pageTitle}
          </title>
        </Head>
        <header>
          <Navigation currentSlug={pageProps.slug} />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}

export default MyApp;