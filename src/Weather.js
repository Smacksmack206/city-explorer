import React from 'react';

class Weather extends React.Component {
    render() {
        
        return (
            this.props.weather.map((day, idx) => (
                <div key={idx}>
                    <p>day: {day.date}</p>
                    <p>description: {day.desc}</p>
                </div>
            ))
        )
    }
}

export default Weather;

