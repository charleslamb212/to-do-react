import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Get gas", "Do laundry", "Put food in slow cooker"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)

