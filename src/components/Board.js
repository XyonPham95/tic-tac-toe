import React, { Component } from 'react'
import Square from './Square'
import '../App.css';

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]; 
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
      }
    }
    return null;
  };

export default class Board extends Component {
    onSquareClicked =(i) =>{
        let squaresList =this.props.squares.slice();
        squaresList[i]= this.props.nextPlayer?"O":"X"
        this.props.setParentsState({squares:squaresList,nextPlayer:!this.props.nextPlayer})
    }
    render() {
        let status='';
        const winner = calculateWinner(this.props.squares)
        
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.props.nextPlayer ? "X" : "O");
        }

        return (
            <div>
            <h2>{status}</h2>
            <div style={{display:"flex"}} className="board-row">
                <Square value={this.props.squares[0]} onClick={()=>this.onSquareClicked(0)}/>
                <Square value={this.props.squares[1]} onClick={()=>this.onSquareClicked(1)}/>
                <Square value={this.props.squares[2]} onClick={()=>this.onSquareClicked(2)}/>
            </div>
            <div style={{display:"flex"}} className="board-row">
                <Square value={this.props.squares[3]} onClick={()=>this.onSquareClicked(3)}/>
                <Square value={this.props.squares[4]} onClick={()=>this.onSquareClicked(4)}/>
                <Square value={this.props.squares[5]} onClick={()=>this.onSquareClicked(5)}/>
            </div>
            <div style={{display:"flex"}} className="board-row">
                <Square value={this.props.squares[6]} onClick={()=>this.onSquareClicked(6)}/>
                <Square value={this.props.squares[7]} onClick={()=>this.onSquareClicked(7)}/>
                <Square value={this.props.squares[8]} onClick={()=>this.onSquareClicked(8)}/>
            </div>
            </div>
        )
    }
}
