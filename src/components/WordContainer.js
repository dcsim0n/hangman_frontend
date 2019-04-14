import React from 'react'
import LetterBox from './LetterBox';

export default function WordContainer(props) {
  return (
    <div className="ui grid">
        <div className="row equal width">
        
            {props.letters.map(letter => <LetterBox letter={letter} incrementGuesses={props.incrementGuesses}/>) }
        </div>
        <div className="row">
            <div className="column">
                <p>{props.definition}</p>
            </div>
        </div>
    </div>
  )
}
