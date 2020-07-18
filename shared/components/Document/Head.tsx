import Head from "next/head";
import { useTheme } from "@material-ui/core";

type Props = {
  pageTitle: string;
  primaryColor: string;
};

const DocumentHead: React.SFC<Props> = ({ pageTitle, children }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
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
        name="msapplication-TileColor"
        content={primaryColor}
      />

      {children}
    </Head>
  );
};

export default DocumentHead;