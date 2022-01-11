import React from 'react';
import { Card } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
       console.log(this.props.movies); 
        return (
            this.props.movies.map((movies, idx) => (
                <div key={idx}>
                    <Card className="bg-dark text-white">
                    <p>Title: {movies.title}</p>
                    <p>overview: {movies.overview}</p>
                    </Card>
                </div>
            ))
        )
    }
}

export default Movies;

