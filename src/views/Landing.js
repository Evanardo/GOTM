import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div className='landing-body'>
        <h1>Welcome to Game of the Month Club</h1>
        {/* <h1>Please Login</h1> */}
        <div className="hero-container">
          
          <h6 className="hero glitch layers" data-text="cult"><span>"Let's start a cult..."</span></h6>
        </div>
        <div className='checklist'>
          {/* <p>here</p> */}
        </div>
      </div>
    )
  }
}

