import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItem';

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }
    // input handler for controlled form
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  // submission event handler for the form
  addItem = (e) =>{
    e.preventDefault()
    this.setState(prevState => {
    return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render(){
    const todoItems =  this.state.taskArray.map(item=>{
      return <ListItem task={item} />
    })
    return(
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>New Item:</label>
          <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
          <button type="submit">Finished the List</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}

export default MyList;
