import React from 'react'
import {Button, Header, Image, Modal} from 'semantic-ui-react'
import FaceImg from '../assets/face.png'

export default function GameOverModal(props) {
    
    return (
      <Modal open={props.modalOpen} >
        <Modal.Header>Game Over</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={FaceImg} />
                <Modal.Description>
                    <Header>{props.won? "YOU WON! Your Score: " + props.score : "YOU LOST!"}</Header>
                    <p>The Word: {props.word}</p>
                    <p>What it means: {props.definition}</p>
                    <p>Click a button to start a new game</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions >
                <Button color="red" onClick={props.handleClose}>Ok</Button>
            </Modal.Actions>
      </Modal>
    )
}

