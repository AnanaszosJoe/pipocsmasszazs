import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export const GiftCard = () => {


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[5000, 10000, 15000, 20000].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}

            disablePadding
          >
            <ListItemButton>
            <CardGiftcardIcon style={{color: "yellow"}}/>
              <ListItemText id={labelId} primary={' ' + `${value} Ft értékben.`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}