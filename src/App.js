import bootstrap from 'bootstrap';
import { IconName } from "react-icons/fa";
import React, { Component } from 'react';
import Nav from './components/Nav';
import NavBar from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/Landing';
import Loginpg from './views/Loginpg';
import Profile from './views/Profile';
import News from './views/News';
import About from './views/About';
import Contact from './views/Contact';
import SignUp from './views/SignUp';
import Cursor from './components/Cursor';
import LoginButton from '../src/components/LoginButton';


export default function App() {
  // render() {
  return (

    <Router>
      {/* <Cursor/> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        {/* <Route element={<LoginButton/>} /> */}
        {/* <Route path='/login' element={<Loginpg />} />
            <Route path='/signup' element={<SignUp />} /> */}
      </Routes>



    </Router>
  )
}

