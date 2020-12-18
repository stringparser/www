import { RxDocument } from 'rxdb';

import { ItemDocType } from '../collections';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Divider, List, ListItem, ListItemText, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

type ListItemsProps = {
  items: RxDocument<ItemDocType>[];
  handleItemSelect: (item: RxDocument<ItemDocType>) => void;
};

const ListItems: React.FC<ListItemsProps> = ({ items, handleItemSelect }) => {
  const classes = useStyles();

  if (items.length === 0) {
    return (
      <List className={classes.root}>
        No items yet
      </List>
    );
  }

  const lastIndex = items.length - 1;

  return (
    <List
      dense
      className={classes.root}
    >
      {items.map((el, index) => {
        return (
          <ListItem
            key={index}
            button
            divider={index < lastIndex}
            onClick={() => handleItemSelect(el)}
          >
            <ListItemText>
              {el.content}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}

function getRxService() {
  return import('../services/RXDBService')
    .then(({ default: RxService }) => RxService)
  ;
}

const RxDBLog: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<RxDocument<ItemDocType>[]>([])
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<RxDocument<ItemDocType>>();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    getRxService()
      .then(RxService =>
        RxService.findItems().then(items => setItems(items))
      )
    ;
  });

  function handleInsertItem() {
    const value = inputRef.current?.value;

    if (value == null || typeof window === 'undefined') {
      return;
    }

    setInputValue('');

    getRxService()
      .then(RxService =>
        RxService.insertItem({ content: value })
      )
    ;
  }

  function handleUpdateItem() {
    if (!selectedItem) {
      return;
    }

    const value = (inputRef.current?.value || '').replace(/\s+/, '');

    setInputValue('');
    setSelectedItem(undefined);

    getRxService()
      .then(RxService =>
        RxService.updateItem(selectedItem, { content: value || '<empty>' })
      )
    ;
  }

  function handleEnterKey(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key !== 'Enter') {
      return;
    }

    if (selectedItem) {
      handleUpdateItem();
    } else {
      handleInsertItem();
    }
  }

  function handleInputChange() {
    const value = inputRef.current?.value;

    if (value != null) {
      setInputValue(value);
    }
  }

  function handleItemSelect(item: RxDocument<ItemDocType>) {
    setSelectedItem(item);
    setInputValue(item.content);
  }

  return (
    <Box>
      <Box display="flex" maxWidth="80vw">
        <TextField
          value={inputValue}
          inputRef={inputRef}
          onInput={handleInputChange}
          onKeyDown={handleEnterKey}
        />
        <span style={{padding: '0.5rem'}} />
        <Button
          component="button"
          onClick={selectedItem ? handleUpdateItem : handleInsertItem}
          children={selectedItem ? 'update' : 'add'}
        />
      </Box>
      <div style={{padding: '0.5rem'}} />
      <ListItems
        items={items}
        handleItemSelect={handleItemSelect}
      />
    </Box>
  );
};

export default RxDBLog;