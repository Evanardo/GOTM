import React, { Component } from 'react'

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { action: 'Tasks', done: false },
      ],
      newToDo: '',
    }
  }

  updateValue = (event) => {
    this.setState({ newToDo: event.target.value })
  }
  //create method that changes the state of the page with button
  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false },
      ],
    });
  };

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item),
    });

  todoRows = () => this.state.todoItems.map((item) => (
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => this.toggleDone(item)}
        />
      </td>
    </tr>
  ))
  render() {
    return (
      <div className='landing-body'>
        <h1>Welcome to Game of the Month Club</h1>
        <div class="hero-container">
          <div class="environment"></div>
          <h6 class="hero glitch layers" data-text="cult"><span>"Let's start a cult..."</span></h6>
        </div>
        <div className='checklist'>

        </div>
      </div>
    )
  }
}
