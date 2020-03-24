import React, { Component } from 'react';
// import './App.css';
import Board from './components/Board';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares:['','','','','','','','',''],
      nextPlayer: false
      }
    }

  setParentsState = (obj) => {
    this.setState(obj)
  }

  render() {
    return (
      <div>
      <h1>Tic-Tac-Toe</h1>
        <Board {...this.state} setParentsState={this.setParentsState}/>
      </div>
    )
  }
}



