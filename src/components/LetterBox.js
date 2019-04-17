import React from 'react'

export default function LetterBox(props) {
  return (
    <div className="column" >
      {props.value === " "? null :<input style={{width:".8em" ,fontSize:'4em'}} type="text" onKeyPress={props.handleGuess} value={props.value}/>}
    </div>
  )
}

