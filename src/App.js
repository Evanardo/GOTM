import bootstrap from 'bootstrap';
import { IconName } from "react-icons/fa";
import React, { Component } from 'react';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './views/Landing';
import Loginpg from './views/Loginpg';
import Profile from './views/Profile';
import News from './views/News';
import About from './views/About';
import Contact from './views/Contact';
import SignUp from './views/SignUp';
import Cursor from './components/Cursor';


export default class App extends Component {
  render() {
    return (
      
      <Router>
          <Cursor/>
          <Nav />
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Loginpg />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          

       
      </Router>
    )
  }
}
