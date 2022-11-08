import bootstrap from 'bootstrap'
import React, { Component } from 'react'
import Nav from './Nav';

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
      <div id='main'>
        
        <Nav></Nav>

        <h1>Welcome</h1>
        <h6>"I'll need your clothes, your boots, and your motorcycle..."</h6>
        {/* <button onClick={this.happyBirthday} >Add to Age +</button> */}
      </div>
    )
  }
}