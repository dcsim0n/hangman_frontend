import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';

import { Route, Switch } from 'react-router-dom'


class App extends Component {

  state = {
    users: []
  }


  render() {
    return (
      <div className="App">
      <Switch>
        < Route path="/signup" component={SignIn} />
      </Switch>
      </div>
    );
  }
}

export default App;
