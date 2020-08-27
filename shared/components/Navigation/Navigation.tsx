import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";
import { withRouter, NextRouter } from "next/router";
import { common } from "@material-ui/core/colors";
import { Theme, makeStyles, Link as MuiLink, FormControlLabel, withStyles, Switch, useTheme } from "@material-ui/core";

import Logo from "../Logo/Logo";
import { bounds } from "../styles";

type Props = {
  router: NextRouter;
  onSwitchTheme: () => void;
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
    maxWidth: `${bounds.maxWidth}`,
    alignItems: 'center',
    justifyContent: 'space-between',
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

const ThemeSwitch = withStyles({
  switchBase: {
    color: common.white,
    '&$checked': {
      color: common.black,
    },
    '&$checked + $track': {
      backgroundColor: common.black,
    },
  },
  checked: {},
  track: {},
})(Switch);

const Navigation: React.SFC<Props> = ({ router, onSwitchTheme }) => {
  const theme = useTheme();
  const classes = useStyles();

  const themeType = theme.palette.type;

  const [state, setState] = useState({
    themeSwitch: themeType === 'light'
  });

  function handleThemeSwitch() {
    onSwitchTheme();

    setState({ ...state, themeSwitch: !state.themeSwitch });
  }

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
          <aside>
              <FormControlLabel
                control={
                  <ThemeSwitch
                    name="themeSwitch"
                    checked={state.themeSwitch}
                    onChange={handleThemeSwitch}
                  />
                }
                label={`${themeType} theme`}
                labelPlacement="start"
              />
            </aside>
        </nav>
      </header>
    </>
  );
};

export default withRouter(Navigation);