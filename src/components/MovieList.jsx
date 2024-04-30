import React from 'react';

const MovieList = (props) => {
    const AddFavouriteComponent = props.favouritesMovies;
    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4'>
            {props.movies.map((movie, index) => (
                <div key={index} className='col'>
                    <div className='card movie-card'>
                        {/* Set a fixed width for the img element */}
                        <img src={movie.Poster} className='card-img-top movie-poster' alt='movie' />
                        <div className='card-body' onClick={() => props.handleFavouriteMovies(movie)}>
                            {/* Your favorite button or component */}
                            <AddFavouriteComponent />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
