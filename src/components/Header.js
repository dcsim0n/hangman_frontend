import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {





    render () {
        return(
            <div>
          
          <a href="/" className="item" onClick={this.props.logout}>Logout</a> 
            
      
            </div>
        )
    }
}

export default Header;