import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom'
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Header from './Header/Header'
import Trailer from './Trailer/Trailer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies:[],
      isAdmin: false,
      loggedIn: false
    }
    
  }

  authSubmit=(data, signIn)=> {
    fetch('http://localhost:9999/auth/sign' + (signIn ? 'in' : 'up'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(body => {
        
        localStorage.setItem('username', body.username)
        localStorage.setItem('token', body.token)
        if(body.isAdmin){
          this.setState({
            isAdmin:true,
            
          })
        }
        this.setState({
          loggedIn:true
        })
      }
      )

  }
  createMovie=(movie) => {
    fetch('http://localhost:9999/feed/movie/create', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(body => console.log(body))
      .catch(err=>console.log(err))
  }

  logout=()=>{
    localStorage.clear()
    this.setState({
      isAdmin:false,
      loggedIn:false
    })
    
  }
  componentDidMount() {
    fetch('http://localhost:9999/feed/movies')
      .then(res => res.json())
      .then(body => {
        this.setState({
          movies:body.movies
        })
      }
      )
  }

  render() {
    return (
      <div className="App">

        <Router>
          <Fragment>
            <Header isAdmin={this.state.isAdmin} loggedIn={this.state.loggedIn} logout={this.logout}/>
            <Switch>
              <Route path="/" render={()=><Home loggedIn={this.state.loggedIn} movies={this.state.movies}/>} exact />
              <Route path="/register" render={() => <Register authSubmit={this.authSubmit} />} />
              <Route path="/login" render={() => <Login authSubmit={this.authSubmit} />} exact />
              <Route path='/logout' render={() => <Redirect to='/'/>}  />

              <Route path="/create" render={() => <Create createMovie={this.createMovie} />} />
              <Route path="/trailer" render={() => <Trailer />} />


            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
