// import React from 'react';
import NavBar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/Landing';
import Profile from './views/Profile';
import Games from './views/Games';
import About from './views/About';
import Contact from './views/Contact';
import GameDetail from './components/GameDetail';
import Collection from './views/Collection';
import { Footer } from './views/Footer';
import { CurtainsRounded } from '@mui/icons-material';




export default function App() {

  return (

    <Router>

      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/games' element={<Games />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />        
        <Route path='/games/:id' element={<GameDetail />} />
        <Route path='/collection' element={<Collection/>} />        
        
      </Routes>


      {/* <Footer/> */}

    </Router>
  )
}

