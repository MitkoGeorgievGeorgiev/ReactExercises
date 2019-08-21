import React from 'react';
import './App.css';
import Street from './Street/Street.jsx'

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
   if(!this.state.hasFetched){
  return null
     }
    return(
      <div className="streets">
        
        <h2>Streets</h2>
        {this.state.streets.length>0?this.state.streets.map((street,idx)=>{
          return (<Street location={street.location} key={idx} id={idx}/>)
        }):null}
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
