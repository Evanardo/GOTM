// import React from 'react';
// import Cursor from './components/Cursor';
import NavBar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/Landing';
import Profile from './views/Profile';
import Games from './views/Games';
import About from './views/About';
import Contact from './views/Contact';
import GameDetail from './components/GameDetail';
import Collection from './views/Collection';
import Chat from './views/Chat';





export default function App() {


  return (
    
    <Router>

      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />        
        <Route path='/contact' element={<Contact />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/:id' element={<GameDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/chat' element={<Chat/>} />        
        
      </Routes>
      

    </Router>
  );
};

