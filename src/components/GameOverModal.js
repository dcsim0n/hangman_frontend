import React from 'react'
import {Button, Header, Image, Modal} from 'semantic-ui-react'
import FaceImg from '../assets/face.png'

export default function GameOverModal(props) {
    
    return (
      <Modal open={props.modalOpen} >
        <Modal.Header>{props.won? "CONGRATULATIONS, YOU WON!" : "YOU LOST!"}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={FaceImg} />
                <Modal.Description>
                    <Header>Your Score: {props.score}</Header>
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

