import bootstrap from 'bootstrap';
import { IconName } from "react-icons/fa";
import React, { Component } from 'react';
import Nav from './components/Nav';
import NavBar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import Landing from './views/Landing';
import Profile from './views/Profile';
import Games from './views/Games';
import About from './views/About';
import Contact from './views/Contact';
import Cursor from './components/Cursor';



export default function App() {
  // render() {
  return (

    <Router>
      {/* <Cursor/> */}
      <NavBar />
      <Routes>
        <Route path='/search' element={<Search />}/>
        <Route path='/' element={<Landing />} />
        <Route path='/games' element={<Games />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        
        
      </Routes>



    </Router>
  )
}

