import React from 'react'

export default function StartBtn(props) {
  return (
    <div>
        <button onClick={props.handleStart} className="ui massive green button">
            Start Game
        </button>
    </div>
  )
}
