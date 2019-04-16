import React from 'react'

export default function StartBtn(props) {
  return (
    <div>
        <button onClick={props.handleStart} className="ui massive red button">
            Start Game
        </button>
    </div>
  )
}
