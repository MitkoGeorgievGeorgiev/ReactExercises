import React from "react";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LoginForm";
import CreateForm from "../Games/CreateForm";

class DynamicForm extends React.Component {

    render() {
        {
            if(localStorage.username){
                return(<CreateForm createGame={this.props.createGame}/>)
            }
        }
        return (
            <div>
                <div>
                    

                    {
                            this.props.loginForm 
                            ? <LogInForm loginUser={this.props.loginUser}/>
                            :<RegisterForm registerUser={this.props.registerUser}/>
                        /*TODO: render a form depending on wheather the loginForm property is true*/
                          
                    }

                </div>          
            </div>
        )
    }
}

export default DynamicForm