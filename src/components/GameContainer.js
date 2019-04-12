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
    
  render() {
    return (
      <div>
        
        <Gallows />
      </div>
    )
  }
}
