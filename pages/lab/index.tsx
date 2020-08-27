import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

type Props = {
  items: Array<{
    href: string;
    title: string;
  }>;
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const fs = require('fs');
  const path = require('path');

  const items = fs.readdirSync(path.join(process.cwd(), 'pages', 'lab'))
    .filter((el: string) => /\.mdx$/.test(el))
    .map((el: string) => `/lab/${el.replace(/\.mdx$/, '')}`)
    .map((href: string) => {
      const title = href.split('/').pop() || '';

      return {
        href,
        title: title.replace(/[-]/g, ' '),
      };
    })
  ;

  return {
    props: {
      items,
      pageTitle: 'blog index',
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

const LabIndex: React.FC<Props> = ({
  items = []
}) => {
  const classes = useStyles();

  return (
    <>
      <h1>lab</h1>

      <List className={classes.root}>
        {items.map((el, index) => {
          return (
            <ListItem key={index}>
              <Link href={el.href}>
                <ListItemText primary={el.title} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default LabIndex;