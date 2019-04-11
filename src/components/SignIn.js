import React from 'react';

class SignIn extends React.Component {
  state = {
    name: "",
    password: ""
  }

  addUser = (user) => {
    let newUsers = this.state.users.concat(user)
    this.setState({ users: newUsers })
  }

  saveUser = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => res.json())
   .then(user => this.props.addUser(user))
    event.target.reset()
  }

  render = () =>
    <form className="ui form" onSubmit={this.saveUser}>
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username"
          onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="password"
          onChange={(e) => this.setState({ password: e.target.value })} />
      </div>
    
      <button className="ui button" type="submit">Sign In</button>

    </form>
}

export default SignIn;