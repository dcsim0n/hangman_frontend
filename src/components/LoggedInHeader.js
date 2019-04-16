import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react'
import FaceImg from "../assets/face_small.png"

class LoggedInHeader extends Component {



    render () {
        return(
            <div>
            
               
                    <Header as='h2' align='left'>
                       <Image src={FaceImg} /> 
                        <Header.Content>
                            Urban Hangman
                            <Header.Subheader> Welcome {this.props.user}</Header.Subheader>
                        </Header.Content>
                    </Header>

                    <Header as='h3' align='right'>
                        <a href="/" class="ui blue" className="item" onClick={this.props.logout}>Logout </a> 
                    </Header>
                        
            </div>
            
        )
    }



}
export default LoggedInHeader;