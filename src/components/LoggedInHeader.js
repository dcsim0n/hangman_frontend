import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'

class LoggedInHeader extends Component {



    render () {
        return(
            <div>
            
                <Segment clearing>
                    <Header as='h2' floated='left'>
                        Urban Hangman
                    </Header>
                    <Header as='h2' floated='center'>
                        Welcome {this.props.user}
                    </Header>
                    <Header as='h2' floated='right'>
                        <a href="/" class="ui blue" className="item" onClick={this.props.logout}>Logout </a> 
                    </Header>
                </Segment>                
                        
            </div>
            
        )
    }



}
export default LoggedInHeader;