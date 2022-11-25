import React from 'react';
import NavBar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/Landing';
import Profile from './views/Profile';
import Games from './views/Games';
import About from './views/About';
import Contact from './views/Contact';
import GameDetail from './components/GameDetail';
import apiKey from '../src/chronic/apiCalls';



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
        <Route path='/games/:name' element={<GameDetail />} />        
        
      </Routes>



    </Router>
  )
}

