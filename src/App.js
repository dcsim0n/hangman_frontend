import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import GameContainer from './components/GameContainer';

import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";



class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      user: null
    }
  }
  customHistory = createBrowserHistory()
  
  setUser = (payload) => {
    console.log('user', payload)
    localStorage.setItem('token', payload.token)
    
    this.setState({user: payload.user})
    //this.forceUpdate()
  }
  

  render() {
    return (
      <div className="App">
      <Switch>
        < Route path="/signup" render={()=><SignUp setUser={this.setUser}/>  } />
        < Route path="/" component={GameContainer} />
      </Switch>
      </div>
    );
  }
}

export default App;
