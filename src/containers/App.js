//react libraries
import React, { Component } from 'react';

//styles
import '../styles/App.css';

class App extends Component {
  clicked = (event) => {};
  render() {
    return (
      <div id="game">
        <div id="head">World's best tic tac toe AI</div>
        <div id="board" onClick={(e) => this.clicked(e)}>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;
