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
      <div>
        <h1>Welcome</h1>
        <h6>"I'll need your clothes, your boots, and your motorcycle..."</h6>
        <div className='container checklist'>
          <h6>You are the TaskMaster...</h6>
          <div id="taskMaster" class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <input type="text" class="form-control" value={this.state.newToDo} onChange={this.updateValue} placeholder="Enter a task..." />
            </div>
            <button className="btn btn-info mb-2" onClick={this.newToDo}>Add Task</button>
          </div>
          <div className='container'>
            <table className="table">
              <thead>
                {/* <tr>
                  <th>Your Task</th>
                </tr> */}
                <tbody>{this.todoRows()}</tbody>
              </thead>
            </table>
          </div>

        </div>
      </div>
    )
  }
}
