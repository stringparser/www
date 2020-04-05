import { AnchorHTMLAttributes } from "react";

const isCurrentPage = (currentHref: string, href: string) => (
  currentHref === href
);

const items = [
  {
    href: '/',
    label: 'index',
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

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const NavigationLink: React.SFC<LinkProps> = ({ className, children, href }) => (
  <>
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
    <style jsx>{`
      .current {
        text-decoration: underline;
      }
    `}</style>
  </>
);

type Props = {
  currentSlug: string;
};

const Navigation: React.SFC<Props> = ({ currentSlug }) => (
  <>
    <aside className="navigation">
      {items.map(({ href, label }, index) =>
        <NavigationLink
          key={index}
          href={href}
          className={isCurrentPage(currentSlug, href)
            ? 'current'
            : undefined
          }
        >
          {label}
        </NavigationLink>
      )}
    </aside>

    <style jsx>{`
      .navigation {
        margin: 0 auto;
        max-width: 50%;
        list-style-type: none;

        padding: 16px 0;

        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </>
)

export default Navigation;