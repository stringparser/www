import cp from "child_process";
import path from "path";
import { glob } from "glob";

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

export async function gitFileDate(filename: string): Promise<Date> {
  const fileDates = cp.execSync(`git log --pretty=format:%cd ${filename}`)
    .toString('utf8')
    .trim()
    .split('\n')
  ;

  const firstDate = fileDates.pop() || '';

  return new Date(firstDate);
}

export type PageItemProps = {
  href: string;
  date: string;
  label: string;
  title: string;
  pathname: string;
};

export function getPageItemsProps(filterRE = /\/(lab|blog)\//) {
  const mainDir = path.join(process.cwd(), 'pages');

  return new Promise((resolve: (result: PageItemProps[]) => void, reject) => {
    glob(`${mainDir}/**/*.mdx`, function (error, result) {
      if (error) {
        reject(error);
      }

      Promise.all(result
        .filter(el => filterRE.test(el))
        .map(async (el) => {
          const date = await gitFileDate(el);
          const href = el.replace(mainDir, '').replace(new RegExp(`${path.extname(el)}$`), '');
          const [,label] = href.split('/');

          const title = (href.split('/').pop() || '')
            .replace(/^(\d+)-(\d+)-(\d+)/, '')
            .replace(/[-]/g, ' ')
            .replace(/(^\s+|\s+$)/gm, '')
          ;

          return {
            href,
            date,
            label,
            title,
            pathname: el,
          }
        })
      ).then(items => {
        return items.sort((a, b) => {
          const da = a.date.getTime();
          const db = b.date.getTime();

          return (
            (db < da) && -1 ||
            (db > da) && 1 ||
            0
          )
        })
        .map(el => {
          return {
            ...el,
            date: el.date.toLocaleDateString(),
          }
        })
      }).then(resolve);

    });
  });
}