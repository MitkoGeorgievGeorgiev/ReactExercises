import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import Header from './Header/Header'
import './App.css';

class App extends Component {

  authSubmit(data, signIn) {
    fetch('http://localhost:9999/auth/sign' + (signIn ? 'in' : 'up'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(body => console.log(body)
      )

  }
  render() {
    return (
      <div className="App">

        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/register" render={() => <Register authSubmit={this.authSubmit} />} />
              <Route path="/login" render={() => <Login authSubmit={this.authSubmit} />} exact />
              <Route path="/create" component={Create} />

            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
