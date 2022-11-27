import { makeStyles } from "@material-ui/styles";
import type { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

import { PageItemProps } from "../../util";

export type PagePostItemProps = {
  item: PageItemProps;
  classes?: ClassNameMap<"listItem" | "listItemLabel">;
  showLabel?: boolean;
}

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemLabel: {
    maxWidth: '3rem',
    textAlign: 'right',
  }
});

const PagePostItem: React.FC<PagePostItemProps> = (props) => {
  const { item, classes = useStyles(), showLabel = false } = props;
  const {href, label, title, date} = item;

  return (
    <ListItem
      button
      href={href}
      component="a"
      className={classes.listItem}
    >
      {showLabel && (
        <ListItemAvatar>
          <ListItemText
            primary={`[${label}]`}
            className={classes.listItemLabel}
          />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={title}
        secondary={date}
      />
    </ListItem>
  );
}

export default PagePostItem;