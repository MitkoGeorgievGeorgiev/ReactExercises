import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <header>
                <Link to="#default" className="logo">Interactive IMDB</Link>
                <div className="header-right">
                    <Link to="/">Home</Link>
                    {this.props.loggedIn ?
                        <span>
                            <Link to="#">Welcome {localStorage.username}</Link>
                            {this.props.isAdmin ? <Link to="/create">Create</Link>:null}
                            <Link to="/logout" onClick={this.props.logout}>Logout</Link>
                        </span>
                        :
                        <span>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </span>}
                </div>
            </header>
        )
    }
}

export default Header