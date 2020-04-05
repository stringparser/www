import Link from "next/link";
import { withRouter, NextRouter } from "next/router";

import { bounds } from '../styles';

const isCurrentPage = (currentHref: string, href: string) => (
  currentHref === href
);

const items = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/lab',
    label: 'lab',
  },
  {
    href: '/blog',
    label: 'blog',
  },
];

type Props = {
  router: NextRouter
};

const Navigation: React.SFC<Props> = ({ router }) => (
  <>
    <header>
      <nav>
        <aside className="links">
          {items.map(({ href, label }, index) =>
            <Link
              key={index}
              href={href}
            >
              <a className={isCurrentPage(router.route, href)
                ? 'current'
                : undefined
              }>
                {label}
              </a>
            </Link>
          )}
        </aside>
      </nav>
    </header>
    <style jsx>{`
      header {
        padding: 1.25rem 0;
        box-shadow: 0 1px 1px rgba(0,0,0,0.075);
      }

      nav {
        margin: 0 auto;
        max-width: ${bounds.maxWidth};
      }

      .links a {
          margin: 0 1rem;
        }
        .links a.current {
          text-decoration: underline;
        }
        .links a:first-child {
          margin-left: 0;
        }
        .links a:last-child {
          margin-right: 0;
        }
    `}</style>
  </>
);

export default withRouter(Navigation);