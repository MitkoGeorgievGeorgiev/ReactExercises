import React, { Component , Fragment} from 'react';
import ReactPlayer from  'react-player'

import Trailer from '../Trailer/Trailer'
import './Home.css'

class Home extends Component {
  constructor(props){
    super(props)

    this.state={
      movies:[],
      currentMovie:{},
      showTrailer:false
    }
  }
  showTrailer=(movie)=>{
    this.setState({
      currentMovie:movie,
      showTrailer:true
    })
} 

  render() {
    return (
      <div className="Home">
        {this.state.showTrailer ? 
        <Fragment><h2>Trailer of : {this.state.currentMovie.title}</h2>
        <div className="trailer" >
        <ReactPlayer className="trailer" url={this.state.currentMovie.trailerUrl} playing />
        </div></Fragment>
        
        : null}
        <h1>All movies</h1>
        <ul className="movies">
          {this.props.movies.map(movie=>(
            <li className="movie" key={movie._id}>
            <h2>{movie.title}</h2><img
              src={movie.poster} />
              <span>
                <button onClick={()=>this.showTrailer(movie)}>View Trailer</button>
                <button>View Story Line</button>
              </span>
          </li>
          ))}
        </ul>
      </div>
    );
  }
  
}

export default Home;
