import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './';
import './styles.css';


const App = () => {
  
  return (
    <>
      <div className='appContainer' >
        <CssBaseline />
        <NavBar />
        <main className='content'>
          <div className='toolbar' />
          <Router>
            <Routes>
              <Route path='/' element={<Movies />} />
              <Route path='/movie/:id' element={<MovieInformation />} />
              <Route path='/actors/:id' element={<Actors />} />
              <Route path='/profile/:id' element={<Profile />} />
            </Routes>
          </Router>
        </main>
      </div>
    </>
  )
}


export default App;
