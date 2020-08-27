import clsx from "clsx";
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import { Theme, makeStyles, Link as MuiLink, Box } from "@material-ui/core";

import { bounds } from "../styles";

const isCurrentPage = (currentHref: string, href: string) => (
  currentHref === href
);

const items = [
  {
    href: '/lab',
    text: 'lab',
  },
  {
    href: '/blog',
    text: 'blog',
  },
];

type Props = {
  router: NextRouter
};

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    margin: '0 auto',
    display: 'flex',
    maxWidth: `${bounds.maxWidth}`,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {

  },

  links: {
    width: '100%',
    margin: '0 1rem',
    display: 'flex',
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    marginRight: '1rem',
  },
  linkCurrent: {
    textDecoration: 'underline',
  },

  header: {
    padding: '1.25rem 1rem',
    boxShadow: `0 1px 1px ${theme.palette.divider}`,
  },

  langDivider: {
    color: 'rgba(0,0,0,0.075)',
  }
}));

const Navigation: React.SFC<Props> = ({ router }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <aside className={classes.logo}>
            <MuiLink href="/">
              logo
            </MuiLink>
          </aside>
          <aside  className={classes.links}>
            {items.map(({ href, text }, index) =>
              <Link
                key={index}
                href={href}
                passHref={true}
              >
                <MuiLink
                  className={clsx(
                    classes.link,
                    isCurrentPage(router.route, href) && classes.linkCurrent,
                  )}
                >
                  {text}
                </MuiLink>
              </Link>
            )}
          </aside>
        </nav>
      </header>
    </>
  );
};

export default withRouter(Navigation);