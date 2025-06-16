import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 80,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e1e',
          color: 'white',
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <SyncIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
