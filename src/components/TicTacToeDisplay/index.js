import React from 'react'

const TicTacToeDisplay = ({winnerLine, handleClicked, utils})=>{
  const square=8

  return(
    <div id="game">
    <div id="status">{winnerLine}</div>
    <div id="head">World's best tic tac toe AI</div>
    
    <div id="board" onClick={handleClicked}>
      {utils.range(0, square).map(squareId =><div key={squareId} className="square" data-square={squareId}/>)}
    </div>
  </div>
  )
}

export default TicTacToeDisplay
