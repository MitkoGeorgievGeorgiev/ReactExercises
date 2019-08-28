import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  constructor(props){
    super(props)

    this.state={
      title:'',
      storyLine:'',
      trailerUrl:'',
      poster:''
    }
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.createMovie(this.state)
  }
  render() {
    return (
      <div className="Create">
        <h1>Create Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="storyLine">Story Line</label>
          <input type="text" id="storyLine" placeholder="Text" name="storyLine" value={this.state.storyLine} onChange={this.handleChange}/>
          <label htmlFor="trailerUrl">Trailer Url</label>
          <input type="text" id="trailerUrl" name="trailerUrl" value={this.state.trailerUrl} onChange={this.handleChange}/>
          <label htmlFor="poster">Movie Poster</label>
          <input type="text" id="poster" name="poster" value={this.state.poster} onChange={this.handleChange}/>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
