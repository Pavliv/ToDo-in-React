import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForms from './input_forms'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={ phonelist: [] };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Phone List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.text}
          />

          <input
            id="new-todo-num"
            placeholder="Number"
            onChange={this.handleNumberChange}
            value={this.state.number}
          />

          <button>
            Add #{this.state.phonelist.length + 1}
          </button>
        </form>
        <InputForms phonelist={this.state.phonelist} />
      </div>
    );
  }

  handleNameChange(event) {
    this.setState({text: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      text: this.state.text,
      number: this.state.number,
      id: Date.now()
    };
    this.setState(prevState => ({
      phonelist: prevState.phonelist.concat(newItem),
      text: '',
      number: ''
    }));
  }
}

export default App;
