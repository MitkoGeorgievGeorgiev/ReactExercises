import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
    }
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.authSubmit(this.state,true)
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="usernameLogin">Username</label>
          <input type="text" id="usernameLogin" name="username" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="passwordLogin">Password</label>
          <input type="password" id="passwordLogin" placeholder="******" name="password" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    );
  }
}

export default Login;
