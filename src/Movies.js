import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
    render() {
       console.log(this.props.movies); 
       console.log(this.props.movies.img);
       
        return (
            this.props.movies.map((movie, idx) => (
                <>
                <Movie key={idx} movie={movie} />
                
                </>
            ))
        )
    }
}

export default Movies;

