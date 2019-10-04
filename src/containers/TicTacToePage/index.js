//react libraries
import React, {Component} from 'react'

//styles
import '../../styles/TicTacToe.css';

//components
import TicTacToeDisplay from '../../components/TicTacToeDisplay';

class TicTacToePage extends Component{
  state={
    winner: undefined, 
    turn: 'x',
    gameEnded: false,
    gameLocked:false,
    board: Array(9).fill(''),
    totalMoves: 0,
  }

  handleClicked = (box) => {
    if(this.state.gameEnded || this.state.gameLocked)return;
    
    if (this.state.board[box.dataset.square] === '') {
      this.state.board[box.dataset.square] = this.state.turn;

      box.innerText = this.state.turn;
        this.state.turn= this.state.turn === 'x' ? 'o' : 'x',
      this.state.totalMoves++
    }

    const result = this.checkWinner();

    if (result === 'x') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'x',
        winnerLine: 'Match won by x'
      });
    } else if (result === 'o') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'o',
        winnerLine: 'Match won by o'
      });
    } else if (result === 'draw') {
      this.state.gameEnded = true;
      this.setState({
        winner: 'draw',
        winnerLine: 'Match is drawn'
      });
    }

if(this.state.turn==='o' && !this.state.gameEnded){
  this.state.gameLocked=true
  let random
  setTimeout(()=>{
    do{
      random=Math.floor(Math.random()*9);
    }while(this.state.board[random]!=='')
    this.state.gameLocked=false
    this.handleClicked(document.querySelectorAll('.square')[random])
  }, 1000)
  
}

  };
  checkWinner = () => {
    
    const moves = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const board = this.state.board;
    for (let i = 0; i < moves.length; i++) {
      if (
        board[moves[i][0]] === board[moves[i][1]] &&
        board[moves[i][1]] === board[moves[i][2]]
      ) {
        return board[moves[i][0]];
      }

      if (this.state.totalMoves === 9) {        
        return 'draw';
      }
    }
    
  };

  utils = {
    
    //create an array of numbers between min and max (edges included)
    range:(min,max)=>Array.from({length:max-min+1}, (_,i)=>min+i)
  }
    render(){
        return(
        <div>
          <TicTacToeDisplay winnerLine= {this.state.winnerLine} handleClicked={(e) => this.handleClicked(e.target)} utils={this.utils}/>
        </div>)
    }
}
export default TicTacToePage