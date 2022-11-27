import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";
import { withRouter, NextRouter } from "next/router";

import { Theme, makeStyles, Link as MuiLink, useTheme } from "@material-ui/core";

import Logo from "../Logo/Logo";

type Props = {
  router: NextRouter;
};

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

const isCurrentPage = (currentHref: string, href: string) => (
  currentHref === href
);

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    margin: '0 auto',
    display: 'flex',
    maxWidth: '85vw',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (min-width: 1024px)': {
      maxWidth: '750px',
    }
  },

  links: {
    margin: '0 1rem',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginRight: '1rem',
  },
  linkCurrent: {
    textDecoration: 'underline',
  },

  header: {
    padding: '0.5rem 0',
    boxShadow: `0 1px 1px ${theme.palette.divider}`,
  },

  langDivider: {
    color: 'rgba(0,0,0,0.075)',
  }
}));

const Navigation: React.SFC<Props> = ({ router }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <aside>
            <MuiLink href="/">
              <Logo />
            </MuiLink>
          </aside>
          <aside  className={classes.links}>
            {items.map(({ href, text }, index) =>
              <Fragment key={index}>
                /
                <Link
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
              </Fragment>
            )}
          </aside>
        </nav>
      </header>
    </>
  );
};

export default withRouter(Navigation);