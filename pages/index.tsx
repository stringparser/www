import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { lsDirStat } from "../shared/util";


type Props = {
  items: Array<{
    date: string;
    href: string;
    label: string;
    title: string;
  }>;
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const path = require('path');
  const mainDir = path.join(process.cwd(), 'pages');

  const items = (await lsDirStat(`${mainDir}/**/*.mdx`))
    .filter(el => /\/(lab|blog)\//.test(el.pathname))
    .map(el => {
      const href = el.pathname.replace(mainDir, '').replace(new RegExp(`${path.extname(el.pathname)}$`), '');
      const label = href.split('/')[1] || '';
      const title = (href.split('/').pop() || '')
        .replace(/^(\d+)-(\d+)-(\d+)/, '')
        .replace(/[-]/g, ' ')
      ;

      return {
        href,
        label,
        title,
        date: new Date(el.birthtimeMs).toLocaleDateString(),
      };
    })
  ;

  return {
    props: {
      items,
      pageTitle: 'Hi, I\'m Javier',
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemLabel: {
    maxWidth: '3rem',
    textAlign: 'right',
    marginRight: '1rem',
  }
}));

const MainIndex: React.FC<Props> = ({
  items = [],
  pageTitle,
}) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {items.map(({ href, label, title }, index) => {
          return (
            <ListItem
              key={index}
              className={classes.listItem}
            >
              <ListItemText
                primary={`[${label}]`}
                className={classes.listItemLabel}
              />
              <Link href={href}>
                <ListItemText primary={title} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default MainIndex;