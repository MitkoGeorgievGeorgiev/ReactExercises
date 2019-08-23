import React from 'react';
import './register.css';
import { log } from 'util';

class RegisterForm extends React.Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    
    handleChange = (event)=>{
    
        
        this.setState({[event.target.name]:event.target.value})

        
    }

    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                this.props.registerUser(this.state)                       
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                }}>
                    <label>Username</label>
                    <input type="text" id="usernameReg" name="username" value={this.state.value} onChange={this.handleChange}/>
                    <label>Email</label>
                    <input type="text" id="emailReg" name="email" value={this.state.value} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" id="passwordReg" name="password" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;