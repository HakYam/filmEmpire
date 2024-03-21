import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './';
import './styles.css';
import { useTheme } from '@mui/material/styles';



const App = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginLeft: '240px',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0',
      },
    }}
    >
      <CssBaseline />
      <NavBar />
      <main className='content'>
        <div className='toolbar' />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </Box>
  );
};

export default App;
