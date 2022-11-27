import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";

import PagePostItem from "../shared/components/Post/PostItem";
import { getPageItemsProps, PageItemProps } from "../shared/util";


type PageProps = {
  items: PageItemProps[];
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const items = await getPageItemsProps();

  return {
    props: {
      items,
      pageTitle: 'Hi, I\'m Javier',
    },
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const MainIndex: React.FC<PageProps> = ({
  items = [],
}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((props, index) => {
        return (
          <PagePostItem
            key={index}
            item={props}
            showLabel={true}
          />
        );
      })}
    </List>
  );
};

export default MainIndex;