✅ ÉTAPE 1 : Création du projet React

Ouvre Cmder puis tape la commande suivante pour créer un projet React :

npx create-react-app perimetre-app
cd perimetre-app


---

✅ ÉTAPE 2 : Initialiser le dépôt Git

Toujours dans le dossier du projet :

git init
git checkout -b sidebar-structure


---

✅ ÉTAPE 3 : Installer Material UI

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material


---

✅ ÉTAPE 4 : Créer la structure de la sidebar

On crée un composant Sidebar.js :

📁 src/components/Sidebar.js

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


---

✅ ÉTAPE 5 : Intégrer la sidebar dans l’app

Modifie le fichier App.js :

📁 src/App.js

import React from 'react';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Page Perimetre</h1>
      </Box>
    </Box>
  );
}

export default App;


---

✅ ÉTAPE 6 : Valider la branche

git add .
git commit -m "Ajout de la sidebar structure avec Material UI"
