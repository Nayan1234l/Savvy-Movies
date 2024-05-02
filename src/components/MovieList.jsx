import React from 'react';

const MovieList = (props) => {
    const AddFavouriteComponent = props.favouritesMovies;

    const firstTenMovies = props.movies.slice(0, 10);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4'>
            {firstTenMovies.map((movie, index) => (
                <div key={index} className='col'>
                    <div className='card movie-card'>
                        <img src={movie.Poster} className='card-img-top movie-poster' alt='movie' />
                        <div className='card-body' onClick={() => props.handleFavouriteMovies(movie)}>
                            <AddFavouriteComponent />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
