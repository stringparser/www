import { preval } from "ts-transformer-preval-macro";
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

const slugRE = /^\/[^\s]+\/?$/;

export function getSlug(route: string) {
  const [_match, slug = '/'] = slugRE.exec(route) || [];
  return slug;
}

export function getMeta(route: string) {

  if (!route || route === "/") {
    return require("../pages/index.mdx").meta || {};
  }

  if (slugRE.test(route)) {
    return require(`../pages${route}/index.mdx`).meta || {};
  }

  return require(`../pages${route}.mdx`).meta || {};
}

export function getPostFiles() {
  return require("fs").readdirSync("./src/pages/blog");
}