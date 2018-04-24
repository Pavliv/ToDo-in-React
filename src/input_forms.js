import React, { Component } from 'react';
export default class InputForms extends Component {
  render() {
    return (
      <div>
        {this.props.phonelist.map(item => (
          <p key={item.id}>
            <span>{item.name}</span>
            <span>{item.number}</span>
          </p>
        ))}
      </div>
    );
  }
}
