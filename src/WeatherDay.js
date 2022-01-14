import React from 'react';
import { Card } from 'react-bootstrap';

class WeatherDay extends React.Component {
    render() {

        return (
         
            <div key={this.props.key}>
                <Card>
                    <p>day: {this.props.day.date}</p>
                    <p>description: {this.props.day.desc}</p>

                </Card>
                </div>
              
                );
    }
}



                export default WeatherDay;


