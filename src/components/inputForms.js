import React, { Component } from 'react';

export default class InputForms extends Component {
  render() {
    return (
      <div>
        {this.props.phonelist.map(item => (
          <ol key={item.id}>
            <li>
              <span>{item.name}</span>
              <span>{item.number}</span>
              <a href="#" onClick={ this.props.handleDelete.bind(null, item) }>[x]</a>
            </li>
          </ol>
        ))}
      </div>
    );
  }
}
