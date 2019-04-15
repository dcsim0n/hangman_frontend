import React, { Component } from 'react'

export default class ScoreBox extends Component {




    render() {
        return (
            <div>
                <p>Current Score: {this.props.score}</p>
                <p>Total Score: {this.props.score + this.props.allTimeScore}</p>

            </div>
    



        )}
}