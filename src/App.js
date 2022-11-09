import bootstrap from 'bootstrap'
import React, { Component } from 'react'
import Nav from './components/Nav';
import{ Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from './views/Landing';
import Loginpg from './views/Loginpg';
import Profile from './views/Profile';
import News from './views/News';
import About from './views/About';
import Contact from './views/Contact';
import SignUp from './views/SignUp';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      post: [],
      name: 'Evan',
      age: 35
      }
    console.log('construction is done')
  }

  componentDidMount = () => {
    console.log('first rendering is complete')
  }

  methodNumber3() {
    return 'do something'
  }

  happyBirthday = () => {
    console.log('button is clicked')
    this.setState({age: this.state.age + 1})
  }

  render() {
    console.log('rendering is about to happen')

    return (
      <Router>
        <div id='main'>
          
          <Nav/>
          <Routes>
            <Route path='/profile'element={<Profile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<Landing/>}/>
            <Route path='/login' element={<Loginpg/>}/>
            <Route path='/signup' element={<SignUp/>}/>



            
          </Routes>

          
          
        </div>
      </Router>
    )
  }
}