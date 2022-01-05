import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';

class Validate extends React.Component {
  
  
  render () {
    return (
       <Alert id='alert'> 
        <Alert.Heading>Unable to Geocode</Alert.Heading>
        </Alert>
    );
  }
}

export default Validate;
