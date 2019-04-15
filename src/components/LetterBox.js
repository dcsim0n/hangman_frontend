import React from 'react'

export default function LetterBox(props) {
  return (
    <div className="column ui massive center input" >
      {props.value === " "? null : <input type="text" onChange={console.log} value={props.value}/> }
    </div>
  )
}

