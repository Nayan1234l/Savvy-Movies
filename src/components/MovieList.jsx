import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div className='d-flex flex-nowrap overflow-auto'>
            {movies.map((movie, index) => (
                <div key={index} className='m-2'>
                    <img src={movie.Poster} alt="movie-poster" style={{ width: '400px' }} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
