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
        <ul className="movies">
          {this.state.movies.map(movie=>(
            <li className="movie" key={movie._id}>
            <h2>{movie.title}</h2><img
              src={movie.poster} />
              <span>
                <button >View Trailer</button>
                <button>View Story Line</button>
              </span>
          </li>
          ))}
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
