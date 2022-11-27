import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { getPageItemsProps, PageItemProps } from "../../shared/util";
import PagePostItem from "../../shared/components/Post/PostItem";


type BlogIndexProps = {
  posts: PageItemProps[];
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: BlogIndexProps }> {
  const posts = await getPageItemsProps(/\/blog\//);

  return {
    props: {
      posts,
      pageTitle: 'blog index',
    },
  };
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

const BlogIndex: React.FC<BlogIndexProps> = ({
  posts = []
}) => {
  const classes = useStyles();

  return (
    <>
      <h1>Blog</h1>

      <List className={classes.root}>
        {posts.map((item, index) => {
          return (
            <PagePostItem
              key={index}
              item={item}
            />
          );
        })}
      </List>
    </>
  );
};

export default BlogIndex;