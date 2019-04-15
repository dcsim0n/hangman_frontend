import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react'

class LoggedOutHeader extends Component {

    render () {
        return(
            <div>
            
                <Segment clearing>
                    <Header as='h2' floated='left'>
                        Urban Hangman
                    </Header>
                    
                </Segment>                
                        
            </div>
            
        )
    }



}


export default LoggedOutHeader