import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react'

export default class LeaderBoard extends Component {

    constructor(props) {
        super(props)
    

    this.state = {
        leaders: []
        }
    }

componentDidMount(){
    fetch('http://localhost:3000/leaders')
    .then(res => res.json())
    .then(data => {
        this.setState({leaders: data})
        console.log(this.state.leaders)      
    })
  }


  render() {
      return (
          <div>
               <List celled='true' animated verticalAlign='middle' >
               <h2>Leader Board </h2>
               {this.state.leaders.map(leader => <List.Item content={`${leader.name} : ${leader.total_score}`} />)}               
               </List>
          </div>
      )
  }

}