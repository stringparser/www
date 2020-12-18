import { RxDocument } from 'rxdb';

import { ItemDocType } from '../collections';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, TextField } from '@material-ui/core';

function renderItems(items: ItemDocType[]) {
  if (items.length === 0) {
    return 'No items yet';
  }

  return (
    <List>
      {items.map((el, index) => {
        return (
          <ListItem key={index}>
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

  function handleAddItem(ev: React.MouseEvent<HTMLButtonElement>) {
    const value = inputRef.current?.value;

    if (value == null || typeof window === 'undefined') {
      return;
    }

    getRxService()
      .then(getRxService =>
        getRxService.insertItem({ content: value })
      )
    ;
  }

  return (
    <Box>
      <Box>
        <TextField inputRef={inputRef} />
        <span style={{padding: '0.5rem'}} />
        <Button
          component="button"
          onClick={handleAddItem}
          children="add"
        />
      </Box>
      <div style={{padding: '0.5rem'}} />
      {renderItems(items)}
    </Box>
  );
};

export default RxDBLog;