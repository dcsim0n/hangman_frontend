import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react'
import FaceImg from "../assets/face_small.png"

class LoggedInHeader extends Component {



    render () {
        return(
            <div>
            
                <Segment clearing>
                <div>
                    <Header as='h2' floated='left'>
                       <Image src={FaceImg} /> Urban Hangman
                    </Header>
                    </div>
                    <div>
                    <Header as='h2' className="welcome" floated='center'>
                        Welcome {this.props.user}
                    </Header>
                    </div>
                    <Header as='h2' floated='right'>
                        <a href="/" class="ui blue" className="item" onClick={this.props.logout}>Logout </a> 
                    </Header>
                </Segment>                
                        
            </div>
            
        )
    }



}
export default LoggedInHeader;