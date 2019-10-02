//react libraries
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

//styles
import '../styles/TicTacToe.css';

//components
import TicTacToePage from './TicTacToePage'

const App = ()=>{
  return(
    <Switch>
      <Route path='/' exact component={TicTacToePage}/>
    </Switch>
  )
}
export default App;
