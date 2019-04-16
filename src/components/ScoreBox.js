import React, { Component } from 'react'

export default class ScoreBox extends Component {




    render() {
        return (
            <div id="score-box">
                <p>Current Score: {this.props.score}</p>
                <p>Total Score: {this.props.score + this.props.allTimeScore}</p>

            </div>
        )}
}