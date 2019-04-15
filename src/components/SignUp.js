import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import FaceImg from '../assets/face_small.png'



class SignUp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      password: ""
    }
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
   .then(user =>{ 
     this.props.history.push("/")
     this.props.setUser(user)
    })
    event.target.reset()
  }

  render = () =>

  <div className='login-form'>
  <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={FaceImg} />Sign Up!
      </Header>
      {/* <p><p> {this.props.errors ? this.props.errors.error : null} </p></p> */}
      <Form size='large' onSubmit={this.saveUser}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' className="name" placeholder='Username' onChange={(e) => this.setState({ name: e.target.value })}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })} />

          <Button color='teal' fluid size='large'>
            Submit
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
</div>
    // <form className="ui form" onSubmit={this.saveUser}>
    //   <div className="field">
    //     <label>Username</label>
    //     <input type="text" name="username" placeholder="Username"
    //       onChange={(e) => this.setState({ name: e.target.value })} />
    //   </div>
    //   <div className="field">
    //     <label>Password</label>
    //     <input type="password" name="password" placeholder="password"
    //       onChange={(e) => this.setState({ password: e.target.value })} />
    //   </div>
    
    //   <button className="ui button" type="submit">Sign Up</button>
    // </form>
}

const SignUpWithRouter = withRouter(SignUp)

export default SignUpWithRouter;