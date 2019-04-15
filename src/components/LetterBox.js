import React, { Component } from 'react'

export default class LetterBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         letter: this.props.letter,
         display: ""
      }
    }
    makeGuess = (e) =>{
        // console.log('e.target.value :', e.target.value);
        const guess = e.target.value
        if (guess === this.state.letter){
            this.setState({display:guess})
        }

        //const guess = e.target.value
        const letter = this.state.letter
        this.props.incrementGuesses({guess, letter})
    }
    
  render() {
    return (
    <div className="column ui massive center input">
      <input onChange={this.makeGuess} type="text" value={this.state.display} />
    </div>
    )
  }
}
