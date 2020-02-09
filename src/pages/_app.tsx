import './app.module.css';
import Navigation from "../shared/components/Navigation";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};