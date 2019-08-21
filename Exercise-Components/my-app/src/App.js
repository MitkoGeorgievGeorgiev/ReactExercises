import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      streets:[],
      selectedStreetIdx:0,
      selectedHouseInd:0,
      hasFetched:false
    }
  }
  render(){
    return(
      <div className="App">
      </div>
    )
  }
  componentWillMount(){
    fetch("http://localhost:9999/feed/street/all")
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        streets:data.streets,
        hasFetched:true
      })
    })
  }
}

export default App;
