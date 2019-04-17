import React from 'react'

export default function LetterBox(props) {
  return (
    <div className="column" >
      {props.value === " "? null :<input readOnly style={{width:".9em" ,fontSize:'4em'}} type="text" onKeyPress={props.handleGuess} value={props.value}/>}
    </div>
  )
}

