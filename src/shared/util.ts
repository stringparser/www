import { preval } from "ts-transformer-preval-macro";
import { AppContext } from "next/app";

export function registerServiceWorker() {
  if ("serviceWorker" in navigator && "caches" in window) {
    setTimeout(async () => {
      navigator.serviceWorker
        .register("../worker.js")
        .then(registration => {
          console.log(
            "[ServiceWorker] _app.js service worker registration successful",
            registration
          );
          return true;
        })
        .catch(err => {
          console.warn(
            "[ServiceWorker] _app.js service worker registration failed",
            err.message
          );
          return false;
        });
    }, 0);
  }
  return false;
}

export function getMeta(router: AppContext["router"]) {
  return (
    ((!router.route || router.route === "/") && require("../pages/index.mdx").meta) ||
    require(`../pages${router.route}.mdx`).meta ||
    {}
  );
}

export function getPostFiles() {
  return require("fs").readdirSync("./src/pages/blog");
}