import React from 'react';
import './App.css';
import Street from './Street/Street.jsx'
import House from './House/House'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseInd: 0,
      hasFetched: false
    }
  }
  getSelectedStreets() {
    return this.state.streets[this.state.selectedStreetIdx].homes
  }
  render() {
    if (!this.state.hasFetched) {
      return null
    }
    return (<div className="App">
      <div className="streets">
        <h2>Streets</h2>
        {this.state.streets.length > 0 ? this.state.streets.map((street, idx) => {
          return (<Street location={street.location} key={idx} id={idx} />)
        }) : null}
      </div>
      <div className="houses">
        <h2>Houses</h2>
        {this.getSelectedStreets().map((home, idx) => {
          return (<House type={home.type} description={home.description
          } id={idx} imageUrl={home.imageUrl} price={home.price} key={idx} />)
        })}
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
