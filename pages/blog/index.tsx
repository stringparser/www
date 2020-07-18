import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";


type Props = {
  posts: Array<{
    href: string;
    title: string;
  }>;
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const fs = require('fs');
  const path = require('path');

  const posts = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'))
    .filter((el: string) => /^\d+-\d+-\d+/.test(el))
    .map((el: string) => `/blog/${el.replace(/\.mdx$/, '')}`)
    .map((href: string) => {
      const title = (/\d+-\d+-\d+-(\S+)/gm.exec(href) || ['']).pop() || '';

      return {
        href,
        title: title.replace(/[-]/g, ' '),
      };
    })
  ;

  return {
    props: {
      posts,
      pageTitle: 'blog index',
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const BlogIndex: React.FC<Props> = ({
  posts = []
}) => {
  const classes = useStyles();

  return (
    <>
      <h1>blog index</h1>

      <List className={classes.root}>
        {posts.map((el, index) => {
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

export default BlogIndex;