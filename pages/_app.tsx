import React from "react";
import { create } from 'jss';
import { AppContext, AppProps } from "next/app";
import { ThemeProvider, CssBaseline, StylesProvider, jssPreset } from "@material-ui/core";

import "./app.module.css";
import config from "../config";

import theme from "../shared/theme";
import { getMeta } from "../shared/util";

import Navigation from "../shared/components/Navigation/Navigation";
import DocumentHead from "../shared/components/Document/Head";

const jss = create({
  ...jssPreset(),
});

export async function getStaticProps({ Component, router, ctx }: AppContext) {
  const pageProps = typeof window === 'undefined' && Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  ;

  const meta = getMeta(router.route);

  return {
    props: {
      ...config.defaults,
      ...pageProps,
      ...meta,
      seo: {
        ...meta.seo,
        ...config.seo,
      },
    }
  };
}

const WebApp: React.FC<AppProps> = (props) => {
  const {
    Component,
    pageProps
  } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector<HTMLElement>('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const headProps: typeof config.defaults = {
    ...config.defaults,
    ...pageProps,
  };

  return (
    <>
      <DocumentHead {...headProps}>
        <meta
          name="apple-mobile-web-app-title"
          content={headProps.pageTitle}
        />
        <title>
          {headProps.pageTitle}
        </title>
      </DocumentHead>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <Navigation />
          <main>
            <Component {...pageProps} />
          </main>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
};

export default WebApp;