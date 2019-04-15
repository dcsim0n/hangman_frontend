import React from 'react'
import LetterBox from './LetterBox';

export default function WordContainer(props) {
  const letterBoxes = function(letters){
    return letters.map((letter,index)=>{
      return <LetterBox key={index} 
      value={letter}
      index={index}
      handleGuess={props.handleGuess} />
    })
  }
  return (
    <div className="ui grid">
        <div className="row equal width">
        
            {letterBoxes(props.letters)}
        </div>
        <div className="row">
            <div className="column">
                <p className="ui text container">{props.definition}</p>
            </div>
        </div>
    </div>
  )
}
