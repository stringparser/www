import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { getPageItemsProps, PageItemProps } from "../../shared/util";
import PagePostItem from "../../shared/components/Post/PostItem";

type LabIndexProps = {
  items: PageItemProps[];
  pageTitle: string;
};

export async function getStaticProps(): Promise<{ props: LabIndexProps }> {
  const items = await getPageItemsProps(/\/lab\//)

  return {
    props: {
      items,
      pageTitle: 'lab index',
    },
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

const LabIndex: React.FC<LabIndexProps> = ({
  items = []
}) => {
  const classes = useStyles();

  return (
    <>
      <h1>Lab</h1>

      <List className={classes.root}>
        {items.map((item, index) => {
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

export default LabIndex;