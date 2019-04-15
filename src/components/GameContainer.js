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
         started: false,
         wrongGuesses: 0
      }
    }
    gameWon(){
      return this.state.letters.every((letter,index)=>{
        //test if our guesses equal our word
        return letter === this.state.guesses[index]
      })
    }
    gameLost(){
     return this.state.wrongGuesses === 6
    }
    resetGame(){
      this.setState({
        guesses: [],
        letters: [ ],
        definition: "",
        started: false,
        wrongGuesses: 0
     })
    }
    handleGuess = (event) => {
      //get the button that was pressed
      const guessLetter = event.key
      
      console.log("guessing..",guessLetter)
      let isGuessCorrect = false
      const newGuesses = this.state.letters.map((letter,index)=>{
        if(guessLetter === letter){
          isGuessCorrect = true
          return letter
        }else{
          return this.state.guesses[index]
        }
      })
      if(isGuessCorrect){
        this.setState({guesses: newGuesses})
      }else{
        this.setState({
          guesses: newGuesses,
          wrongGuesses: this.state.wrongGuesses + 1
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
        <Gallows guesses={this.state.wrongGuesses} />
        {this.state.started 
          ? <>
          <WordContainer 
          definition={this.state.definition} 
          letters={this.state.guesses} 
          handleGuess={this.handleGuess}/>
          <button className="ui button" onClick={this.getWord}>Nope, next word please!</button>
          </>
          : 
          <StartBtn 
          handleStart={this.startGame}/>
        }
        
        
      </div>
    )
  }
}
