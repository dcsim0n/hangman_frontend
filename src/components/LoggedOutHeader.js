import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react'
import Logo from "../assets/logo.png"


class LoggedOutHeader extends Component {

    render () {
        return(
            <div>
            
                <Segment clearing>
                <Header floated='left'>
                <Header.Content>
                            <Image src={Logo} size='medium'/>
                            {/* <Header.Subheader> Welcome {this.props.user}</Header.Subheader> */}
                </Header.Content>
                </Header>
                </Segment>                
                        
            </div>
            
        )
    }



}


export default LoggedOutHeader