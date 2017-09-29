import React, { Component } from 'react';

export class Note extends Component{
  render() {
    var style = { backgroundColor: this.props.color };
    return (
      <div className="note" style={style}>
          <span className="delete-note" onClick={this.props.onDelete}> × </span>
          {this.props.children}
      </div>
    )
  }
}
