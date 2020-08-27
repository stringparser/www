import React, { useState } from "react";
import { create } from 'jss';
import { AppContext, AppProps } from "next/app";
import { ThemeProvider, CssBaseline, StylesProvider, jssPreset } from "@material-ui/core";

import "./app.module.css";
import config from "../config";

import { getMeta } from "../shared/util";

import Navigation from "../shared/components/Navigation/Navigation";
import DocumentHead from "../shared/components/Document/Head";
import { lightTheme, darkTheme, defaultTheme } from "../shared/theme";

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
  const { Component, pageProps } = props;

  const [theme, setTheme] = useState(defaultTheme);

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

  function handleSwitchTheme() {
    const themeType = theme.palette.type === 'light'
      ? 'dark'
      : 'light'
    ;

    setTheme(themeType === 'dark'
      ? darkTheme
      : lightTheme
    );

    window.localStorage.setItem('theme', themeType);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <DocumentHead {...headProps}>
            <meta
              name="apple-mobile-web-app-title"
              content={headProps.pageTitle}
            />
            <title>
              {headProps.pageTitle}
            </title>
          </DocumentHead>
          <Navigation
            onSwitchTheme={handleSwitchTheme}
          />
          <main>
            <Component {...pageProps} />
          </main>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
};

export default WebApp;