import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import FacebookLogin from 'react-facebook-login';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      squares:['','','','','','','','',''],
      nextPlayer: false,
      history:[],
      user: ''
      }
    }

  setParentsState = (obj) => {
    this.setState(obj)
  }

  showPast = (item,idx) => {
    this.setState({squares:item.squares, nextPlayer:item.nextPlayer, history:this.state.history.filter((i,e)=>e<=idx)})
  }

  responseFacebook = (response) => {
    this.setState({user:response.name})
  }

  postData = async() =>{
    let data = new URLSearchParams();
    data.append("player", this.state.user);
    data.append("score", 3);
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: data.toString(),
  json: true
});
  this.getData();
  }

  getData = async() => {
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    let result = await fetch(url);
    let data = await result.json();
  }

  render() {
    if(!this.state.user){
      return(<div className="App">
      <FacebookLogin
      autoLoad={true}
      appId="526011201663493"
      fields="name,email,picture"
      callback={(resp) => this.responseFacebook(resp)}
    /> </div>
      )
    }
    return (
      <div className="App">
      <div >
      <h1>Tic-Tac-Toe</h1>
        <Board {...this.state} setParentsState={this.setParentsState} postData={this.postData}/>
      </div>
      <div>
      <h2>User info : {this.state.user}</h2>
      <ul>
      {
        this.state.history.map((item,idx)=>{
          return(<li><button onClick={()=>this.showPast(item,idx)}>go to move {idx+1}</button></li>)
        })
      }
      </ul>
      </div>
      </div>
    )
  }
}



