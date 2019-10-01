//react libraries
import React, { Component } from 'react';

//styles
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      winner: undefined,
    };
    this.gameState = {
      turn: 'x',
      gameEnded: false,
      gameLocked:false,
      board: Array(9).fill(''),
      totalMoves: 0,
    }
  }

  clicked = (box) => {
    if(this.gameState.gameEnded || this.gameState.gameLocked)return;
    if (this.gameState.board[box.dataset.square] == '') {
      this.gameState.board[box.dataset.square] = this.gameState.turn;

      box.innerText = this.gameState.turn;
        this.gameState.turn= this.gameState.turn == 'x' ? 'o' : 'x',
      this.gameState.totalMoves++
    }

    var result = this.checkWinner();
    if (result == 'x') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'x',
        winnerLine: 'Match won by x'
      });
    } else if (result == 'o') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'o',
        winnerLine: 'Match won by o'
      });
    } else if (result == 'draw') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'draw',
        winnerLine: 'Match is drawn'
      });
    }
if(this.gameState.turn=='o' && !this.gameState.gameEnded){
  this.gameState.gameLocked=true
  setTimeout(()=>{
    do{
      var random=Math.floor(Math.random()*9);
    }while(this.gameState.board[random]!='')
    this.gameState.gameLocked=false
    this.clicked(document.querySelectorAll('.square')[random])
  }, 1000)
  
}

  };
  checkWinner = () => {
    
    var moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    var board = this.gameState.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] == board[moves[i][1]] &&
        board[moves[i][1]] == board[moves[i][2]]
      ) {
        return board[moves[i][0]];
      }

      if (this.gameState.totalMoves == 9) {        
        return 'draw';
      }
    }
    
  };
  render() {
    return (
      <div id="game">
        <div id="status">{this.state.winnerLine}</div>
        <div id="head">World's best tic tac toe AI</div>
        <div id="board" onClick={(e) => this.clicked(e.target)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
      </div>
    );
  }
}

export default App;
