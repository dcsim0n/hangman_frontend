import React, { Component } from 'react';
// import { Header, Segment } from 'semantic-ui-react'
import LoggedInHeader from './LoggedInHeader'
import LoggedOutHeader from './LoggedOutHeader'


class HangmanHeader extends Component {


    displayLogOut = (user) => {
        if (this.props.user) {
        return <LoggedInHeader user={this.props.user} logout={this.props.logout} />}
        else if (!this.props.user) {
            return <LoggedOutHeader />
        }
    }



    render () {
        return(
            <div>
                {this.displayLogOut()}         
            </div>
            
        )
    }
}

export default HangmanHeader;





