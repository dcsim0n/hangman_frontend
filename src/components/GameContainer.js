import React, { Component } from 'react'
import Gallows from './Gallows';
import StartBtn from './StartBtn'
import Header from './Header'
import WordContainer from './WordContainer';
export default class GameContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
         guesses: [],
         letters: [ ],
         definition: "",
         started: false
      }
    }
    incrementGuess = (letterBox)=>{
      //This method is going away
      console.log('letterBox', letterBox)
      if(letterBox.letter === letterBox.guess){
        this.setState({correctGuesses: this.state.correctGuesses + 1 },console.log)

      }else if (this.state.wrongGuesses < 5){
        this.setState({wrongGuesses: this.state.wrongGuesses +1 })
      }else{ //Restart game
        this.setState({
          started: false,
          wrongGuesses: 0,
          correctGuesses: 0,
          letters: []
        })
      }
      
    }

    getWord= ()=>{
      fetch("http://api.urbandictionary.com/v0/random")
      .then(resp =>{
        if(!resp.ok){
          alert("Problem getting new word")
          throw Error
        }
        return resp.json()
      })
      .then(data=>{
        data.list.sort((word1,word2)=>{
          //sort by descending thumbs up
          //ie: word with most thumbs up is first
          if(word1.thumbs_up > word2.thumbs_up)
          return -1
          if(word1.thumbs_up < word2.thumbs_up)
          return 1
          return 0
        })
        console.log('data', data.list)
        const wordObj = data.list[0] //use the most popular random word
        const letters = wordObj.word.split("")
        //put any spaces into the guesses array
        const guesses = letters.map(letter=>letter===" "? " ": "")
    
        this.setState({
          letters: letters,
          guesses: guesses,
          definition: wordObj.definition
        })
      })
    }
    startGame = ()=>{
      this.setState({started: true})
      this.getWord()
    }
    
  render() {
    return (
      
      
      <div className="ui center aligned container">
        
        <Header logout={this.props.logout}/>
        <Gallows guesses={this.state.guesses} />
        {this.state.started 
          ? 
          <WordContainer 
          definition={this.state.definition} 
          letters={this.state.letters} 
          handleGuess={this.handleGuess}/>
          : 
          <StartBtn 
          handleStart={this.startGame}/>
        }
        
        
      </div>
    )
  }
}
