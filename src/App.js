import React from 'react';
import './App.css';
import axios from 'axios';
import Validate from './Validate';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeSearchedFor: '',
      locationObject: {},
      display_Error: false
    }
  }
  

  saveCitySearchedFor = (event) => {
    console.log(event.target.value);
    this.setState({cityWeSearchedFor: event.target.value})
  };
  
  getLocation = async () => {
    try {
    const endpoint = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityWeSearchedFor}&format=json`;
    console.log("URL: ", endpoint);
    const response = await axios.get(endpoint);
    console.log('response object', response.data[0]);
    this.setState({locationObject: response.data[0]});
  } catch(error) {
     this.setState({display_Error: true})
  }
  } 

  render () {
    return (
      
    
      <Container>
      <div className='App'>
      <input id='form' className='form' onChange={this.saveCitySearchedFor} placeholder='search for a city'>
      </input>
      <button id='button' onClick={this.getLocation}>Explore!</button>
      
      {this.state.locationObject.place_id &&
      <h2>The city we searched for is: {this.state.locationObject.display_name}</h2>
     }
     <h3>{this.state.locationObject.lat &&
     this.state.locationObject.lat +', '+ this.state.locationObject.lon}</h3>
     <p id='err'></p>
     {this.state.display_Error && 
     <Validate />}
     <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12`} alt={this.state.locationObject.display_name}/>
      </div>

      </Container>
     
    );
  }
}

export default App;
