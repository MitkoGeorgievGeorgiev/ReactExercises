import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor(props){
    super(props)

    this.state={
      movies:[]
    }
  }
  render() {
    return (
      <div className="Home">
        <h1>All movies</h1>
        <ul class="movies">
          <li class="movie">
            <h2>Titanic (1997)</h2><img
              src="" />
          </li>
          <li class="movie">
            <h2>Avatar (2009)</h2><img
              src="" />
          </li>
        </ul>
      </div>
    );
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
}

export default Home;
