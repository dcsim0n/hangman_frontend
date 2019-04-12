import React from 'react';



 class LogIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: ""
        }
    }
    
    handleSubmit=(event) => {
        event.preventDefault()
        
       
        }

     render = () =>
        <form className="form-type-material" onSubmit={this.handleSubmit} >
        <div className="form-group">
            {/* <label>Username</label> */}
            <input type="text" className="form-control" placeholder="Username" name="name"
            onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
        <div className="form-group">
            {/* <label>Password</label> */}
            <input type="text" className="form-control" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        
        <button className="ui button" type="submit">Log In</button>
        </form>
}


export default LogIn;