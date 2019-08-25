import React from 'react';
import './login.css';

class LogInForm extends React.Component {
    constructor(props){
        super(props)
        this.state={

            username:'',
            password:''

        }
    }
    handleChange=(event)=>{
        this.setState({
        [event.target.name]:event.target.value

        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.loginUser(this.state)

    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.loginUser(this.state)
                   // TODO: prevent the default behavior of the event and use the loginUser function by passing it the data from the form
                }}>
                    <label>Usersname</label>
                    <input type="text" id="usernameLogin" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" id="passwordLogin" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default LogInForm;
