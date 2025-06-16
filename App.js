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
