import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {
    render() {

        return (
         
            <div key={this.props.key}>
                    <Card className="bg-dark text-white">
                    <p>Title: {this.props.movie.title}</p>
                    <p>overview: {this.props.movie.overview}</p>
                    <img src={this.props.movie.imgURL} alt={this.props.movie.title} />
                    </Card>
                </div>
              
                );
    }
}



                export default Movie;