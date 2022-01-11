import React from 'react';
import './App.css';
import axios from 'axios';
import Validate from './Validate';
import Container from 'react-bootstrap/Container';
import Weather from './Weather';
import Movies from './Movies';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeSearchedFor: '',
      locationObject: {},
      display_Error: false,
      weather: [],
      movies: [],
      errors: ''
    }
  }


  saveCitySearchedFor = (event) => {
    console.log(event.target.value);
    this.setState({ cityWeSearchedFor: event.target.value })
  };

  getLocation = async () => {
    try {
      const endpoint = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityWeSearchedFor}&format=json`;
      console.log("URL: ", endpoint);
      const response = await axios.get(endpoint);
      console.log('response object', response.data[0]);
      this.setState({ locationObject: response.data[0],
      display_Error: false });
      this.getWeather();
      this.getMovies(this.state.cityWeSearchedFor);
    } catch (error) {
      this.setState({ display_Error: true,
      errors: error.response.status + ': ' + error.response.data.error 
      });
  
    }
  }

  getWeather = async (lat, lon, searchQuery) => {
    try {
    let url = `https://city-explorer-api-project.herokuapp.com/weather`;
    let response = await axios({
      method: 'get',
      url: url,
      params: {
        lat: this.state.locationObject.lat,
        lon: this.state.locationObject.lon
      }
    })
  
    this.setState({ weather: response.data,
    display_Error: false });
  } catch (error) {
    this.setState({ display_Error: true,
    errors: error.response.status + ': ' + error.response.data.error 
    });
  }
  }

  getMovies = async (searchQuery) => {
    try {
    let url = `https://city-explorer-api-project.herokuapp.com/movies?searchQuery=${searchQuery}`;
    let response = await axios({
      method: 'get',
      url: url,
      params: {
        movie_id: this.movie_id,
        key: this.key,
        searchQuery: this.searchQuery
      }
    })
  
      console.log(response.data);
      
    this.setState({ movies: response.data,
    display_Error: false });
    console.log(this.state.movies);
  } catch (error) {
    this.setState({ display_Error: true,
    errors: error.response.status + ': ' + error.response.data.error 
    });
  }
  }
  


  render() {
    return (


      <Container>
        <div className='App'>
          <input id='form' className='form' onChange={this.saveCitySearchedFor} placeholder='search for a city'>
          </input>
          <button id='button' onClick={this.getLocation}>Explore!</button>
         
          
          {this.state.locationObject.place_id &&
            <div>
            <h2>The city we searched for is: {this.state.locationObject.display_name}</h2>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=12`} alt={this.state.locationObject.display_name} />
            </div>
          }
          <h3>{this.state.locationObject.lat &&
            this.state.locationObject.lat + ', ' + this.state.locationObject.lon}</h3>
          <p id='err'></p>
          {this.state.display_Error &&
            <Validate errors={this.state.errors}/>}
          <Weather weather={this.state.weather}/>
          <Movies movies={this.state.movies}/>
        </div>
      </Container>

    );
  }
}

export default App;
