import React, { Component } from 'react'
import './App.css'

class ListItem extends Component {
  render() {
    return (
      <div>
        {/* calling prop using 'this.props.' */}
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default ListItem