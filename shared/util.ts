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
    return require("../pages/index.mdx").meta || {};
  }

  if (baseFolders.includes(route)) {
    return require(`../pages${route}/index.mdx`).meta || {};
  }

  return require(`../pages${route}.mdx`).meta || {};
}