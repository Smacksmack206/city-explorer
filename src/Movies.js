import React from 'react';

class Movies extends React.Component {
    render() {
       console.log(this.props.movies); 
        return (
            this.props.movies.map((movies, idx) => (
                <div key={idx}>
                    <p>Title: {movies.title}</p>
                    <p>overview: {movies.overview}</p>
                </div>
            ))
        )
    }
}

export default Movies;

