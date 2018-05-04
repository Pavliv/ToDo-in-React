import React, { Component } from 'react';
import '../App.css';
import InputForms from './inputForms'

class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state={ phonelist: [] };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <div className="style-page">
        <h2>Phone List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name}
            required
          />
          <input
            type="number"
            placeholder="Number"
            onChange={this.handleNumberChange}
            value={this.state.number}
            required
          />
          <button>
            Add #{this.state.phonelist.length + 1}
          </button>
        </form>
        <InputForms handleDelete={this.handleDelete} phonelist={this.state.phonelist} />
      </div>
    );
  }

  handleDelete(itemToBeDeleted) {
    const newItem = this.state.phonelist.filter((_item) => {
      return _item != itemToBeDeleted
    });
    
    this.setState({phonelist: newItem });
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      number: this.state.number,
      id: Date.now()
    };
    this.setState(prevState => ({
      phonelist: prevState.phonelist.concat(newItem),
      name: '',
      number: ''
    }));
  }
}

export default PhoneList;
