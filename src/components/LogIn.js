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
     <div>
     
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui image header">
            <div className="content">
                Log-in to your account
            </div>
                </h2>
        <div><p> {this.props.errors ? this.props.errors.error : null} </p>

        <form className="ui large form" onSubmit={this.handleSubmit} >
        <div className="ui stacked secondary segment">
        <div class="field">
        <div class="ui left icon input">
        <i class="user icon"></i>           
            <input type="text" placeholder="Username" name="name"
            onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
        </div>
        </div> 
        <div className="ui stacked secondary segment">
            <div className="field">
            <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        </div>
            </div>
        
        <button className="ui fluid large teal submit button"  type="submit">Log In</button>
        </form>
        <div class="ui message">
      New to us? <a href="/signup">Register</a>
    </div>
        </div>
        </div>
        </div>
        </div>
}


const LogInWithRouter = withRouter(LogIn)

export default LogInWithRouter;