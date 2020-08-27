import fs from "fs";
import { glob } from "glob";
import { promisify } from "util";

const statFile = promisify(fs.stat);

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

const slugRE = /^\/[^0-9]+\/?$/;
const baseFolders = ['/lab', '/blog'];

export function getSlug(route: string) {
  const [_match, slug = '/'] = slugRE.exec(route) || [];
  return slug;
}

export function getMeta(url: string = '') {
  const route = url.replace(/\/(index)?$/, '');

  if (!route || route === "/") {
    return {};
  }

  if (baseFolders.includes(route)) {
    return require(`../pages${route}/index`).meta || {};
  }

  return require(`../pages${route}.mdx`).meta || {};
}

export type lsDirStatResult = fs.Stats & {
  pathname: string;
  createdAt?: string;
};

export function lsDirStat(pattern: string) {

  return new Promise((resolve: (result: lsDirStatResult[]) => void, reject) => {
    glob(pattern, function (error, matches) {
      if (error) {
        reject(error);
      }

      Promise.all(matches.map(el => Promise.all([el, statFile(el)])))
        .then(values => {
          const result = values
            .map(([pathname, stats]) => {
              return {
                ...stats,
                pathname
              };
            })
            .sort((a, b) =>
              a.birthtimeMs > b.birthtimeMs && -1 ||
              a.birthtimeMs < b.birthtimeMs && 1 ||
              0
            )
          ;

          resolve(result);
        })
      ;
    });
  });
}