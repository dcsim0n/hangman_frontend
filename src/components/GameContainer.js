import React, { Component } from 'react'
import Gallows from './Gallows';

export default class GameContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         guesses: 0,
         letters: [ ],
         started: false
      }
    }
    incrementGuesses = (e)=>{
      const newGuesses = this.state.guesses + 1
      this.setState({guesses: newGuesses})
    }
    
  render() {
    return (
      <div>
        
        <Gallows guesses={this.state.guesses} />
        
      </div>
    )
  }
}
