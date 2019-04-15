import React from 'react';
import { withRouter } from 'react-router-dom';


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
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => {
            return res.json()})
        .then( user => {
            if (user.error)
                this.props.setError(user)
            else {
                this.props.history.push("/")
                this.props.setUser(user)}
        })
    }        

     

     render = () =>
        <div><p> {this.props.errors ? this.props.errors.error : null} </p>
        <form className="ui form" onSubmit={this.handleSubmit} >
        <div className="field">
            {/* <label>Username</label> */}
            <input type="text" placeholder="Username" name="name"
            onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
        <div className="field">
            {/* <label>Password</label> */}
            <input type="text" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        
        <button className="ui button" type="submit">Log In</button>
        </form>
        </div>
}


const LogInWithRouter = withRouter(LogIn)

export default LogInWithRouter;