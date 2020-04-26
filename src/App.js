import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Login from './container/Login/login.index.js';
import Home from './container/Home/home.index.js';
import configureStore from './store/index'

function App() {
  return (
    // <Login />
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
