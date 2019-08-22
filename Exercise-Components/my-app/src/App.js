import React from 'react';
import './App.css';
import Street from './Street/Street.jsx'
import House from './House/House'
import HouseDetails from './HouseDetailsSection/HouseDetails'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
  }
  streetHoverEvent(idx){
    this.setState({selectedStreetIdx:idx})
  }
  houseHoverEvent(idx){
    this.setState({selectedHouseIdx:idx})
  }
  getSelectedStreets() {
    return this.state.streets[this.state.selectedStreetIdx].homes
  }
  getSelectedHoude(){
    return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx]
  }
  render() {
    if (!this.state.hasFetched) {
      return null
    }
    return (<div className="App">
      <div className="streets">
        <h2>Streets</h2>
        {this.state.streets.length > 0 ? this.state.streets.map((street, idx) => {
          return (<Street streetHoverEvent={this.streetHoverEvent.bind(this)} location={street.location} key={idx} id={idx} />)
        }) : null}
      </div>
      <div className="houses">
        <h2>Houses</h2>
        {this.getSelectedStreets().map((home, idx) => {
          return (<House houseHoverEvent={this.houseHoverEvent.bind(this)} type={home.type} description={home.description
          } id={idx} imageUrl={home.imageUrl} price={home.price} key={idx} />)
        })}
      </div>
      <div>
      {this.state.streets.length>0?<HouseDetails type={this.getSelectedHoude().type} imageUrl={this.getSelectedHoude().imageUrl} key={this.state.selectedHouseIdx}/>:null}
      </div>
      
    </div>



    )


  }
  componentWillMount() {
    fetch("http://localhost:9999/feed/street/all")
      .then(res => res.json())
      .then(data => {
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      })
  }
}

export default App;
