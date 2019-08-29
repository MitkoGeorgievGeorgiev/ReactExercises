import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  handleChange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value

    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.authSubmit(this.state,)
  }
  render() {
    {if(localStorage.username){
      return <Redirect to="/"/>
    }}
    return (
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="******" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" value="REGISTER" />
        </form>
      </div>

    );
  }
}

export default Register;
