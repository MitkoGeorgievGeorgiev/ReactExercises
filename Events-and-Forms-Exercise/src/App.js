import React, { Component } from 'react';
import './App.css';
import AppHeader from "./App/AppHeader";
import AppContent from "./App/AppContent";
import AppFooter from "./App/AppFooter";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: [],
            hasFetched: false,
            loginForm: false,
        }
    }

    registerUser(user) {
        // TODO: register a user and login
        fetch('http://localhost:9999/auth/signup', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(user), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(body => {
                if (body.errors) {
                    console.log(body.errors)
                }
                else {
                    localStorage.setItem('username', body.username.toString())
                    localStorage.setItem('userId', body.userId.toString())
                    this.setState({ user: body.username })
                }
            })

    }

    loginUser(user) {
        // TODO: login a user and set sessionStorage items username and token
        fetch('http://localhost:9999/auth/signin', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(body => {
                if (body.errors) {
                    console.log(body.errors);

                } else {
                    localStorage.setItem('username', body.username)
                    localStorage.setItem('token', body.token)
                    this.setState({ user: body.username })

                }
            })
    }

    logout(event) {
        event.preventDefault()
        localStorage.clear()
        this.setState({
            user: ''
        })
        // TODO: prevent the default state
        // TODO: delete the data from the sessionStorage
        // TODO: update the state (user: null)
    }
    fetchGames(){
        fetch('http://localhost:9999/feed/games')
            .then(res => res.json())
            .then(body => {
                if (!body.errors) {
                    this.setState({
                        games: body.games
                    })
                }
            })
            .catch(error => console.error(error))
    }
    componentWillMount() {
        // TODO: check if there is a logged in user using the sessionStorage (if so, update the state, otherwise set the user to null)
        if (localStorage.username) {
            this.setState({ user: localStorage.username })
        }
        // TODO: fetch all the games
        this.fetchGames()
        
    }

    createGame(data) {
        fetch('http://localhost:9999/feed/game/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(body=>{
            if(!body.errors){
               this.fetchGames()
            }
        })
        .catch(err=>console.error(err))
        // TODO: create a game using fetch with a post method then fetch all the games and update the state 
    }

    switchForm() {

        this.setState(prevState => ({ loginForm: !prevState.loginForm }))
        // TODO: switch the value of the loginForm property
    }

    render() {
        return (
            <main>
                <AppHeader
                    user={this.state.user}
                    logout={this.logout.bind(this)}
                    switchForm={this.switchForm.bind(this)}
                    loginForm={this.state.loginForm}
                />
                <AppContent
                    registerUser={this.registerUser.bind(this)}
                    loginUser={this.loginUser.bind(this)}
                    games={this.state.games}
                    createGame={this.createGame.bind(this)}
                    user={this.state.user}
                    loginForm={this.state.loginForm}
                />
                <AppFooter />
            </main>
        )
    }
}

export default App;


