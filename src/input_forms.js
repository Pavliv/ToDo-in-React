import React, { Component } from 'react';
export default class InputForms extends Component {
  render() {
    return (
      <div>
        {this.props.phonelist.map(item => (
          <p key={item.id}>{item.text}{item.number}</p>
        ))}
      </div>
    );
  }
}
