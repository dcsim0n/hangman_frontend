import React, { Component } from 'react'
import Gallows from './Gallows';
import StartBtn from './StartBtn'
export default class GameContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         guesses: 0,
         letters: [ ],
         definition: "",
         started: false
      }
    }
    incrementGuesses = (e)=>{
      const newGuesses = this.state.guesses + 1
      this.setState({guesses: newGuesses})
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
        this.setState({
          letters: wordObj.word.split(""),
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
      <div>
        
        <Gallows guesses={this.state.guesses} />
        {this.state.started 
          ? 
          {/*Show other compoents */}
          : 
          <StartBtn 
          handleStart={this.startGame}/>
        }
        
        
      </div>
    )
  }
}
