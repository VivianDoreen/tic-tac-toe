//react libraries
import React from 'react';
import ReactDom from 'react-dom';

//third party libraries
import {BrowserRouter as Router} from 'react-router-dom'

//components
import App from './containers/App';

ReactDom.render(
  <Router>
    <App/>
  </Router>, document.getElementById('app'));
