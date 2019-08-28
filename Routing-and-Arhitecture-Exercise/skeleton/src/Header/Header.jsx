import React from 'react'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="#default" className="logo">Interactive IMDB</Link>
                <div className="header-right">
                        <Link to="/">Home</Link>
                        <span>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </span>
                </div>
            </header>
        )
    }
}

export default Header