import React, { Component } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import GameContainer from './components/GameContainer';
import LogIn from './components/LogIn';
import { Route, Switch } from 'react-router-dom'



class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      user: localStorage.getItem("user"),
      errors: null
    }
  }
  //customHistory = createBrowserHistory()
  
  setUser = (payload) => {
    console.log('user', payload)
    localStorage.setItem('token', payload.token)
    localStorage.setItem('user', payload.user)
    this.setState({user: payload.user, errors: null})
    //this.forceUpdate()
  }

  setError = (payload) => {
    this.setState({errors: payload})
  }

  logout = () => {
    this.setState({ user: null })
    localStorage.clear()
  }
  

  render() {
    return (
      <div className="App">
      
      
      <Switch>
        < Route path="/signup" render={()=><SignUp setUser={this.setUser}/>  } />
        < Route path="/" render={ () => this.state.user === null ? < LogIn setUser={this.setUser} setError={this.setError} errors={this.state.errors}/> : <GameContainer setUser={this.setUser} logout={this.logout} />}  /> 
      </Switch>
      </div>
    );
  }
}

export default App;
