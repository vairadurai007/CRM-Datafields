import { Box, Stack } from '@mui/material';
import SideNavBar from './SideNavBar';
import NavBar from './NavBar';
import Settings from './settings';

function App() {

  return (
    <Box>
      <Stack direction='row'
        sx={{ width: '100%', backgroundColor: 'white' }}>
        <SideNavBar />
        <Box
          sx={{ flexGrow: 1 }}>
          <NavBar />
          <Settings />
        </Box>
      </Stack >
    </Box>
  );
}

export default App;
