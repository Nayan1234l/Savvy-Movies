import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieHeading from "./components/MovieHeading";
import SearchMovie from "./components/SearchMovie";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [addFavourite, setAddFavourite] = useState([]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const apiUrl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=3f0caaef`;
        const response = await fetch(apiUrl);
        const convertJson = await response.json();
        if (convertJson.Search) {
          setMovies(convertJson.Search);
        }
      } catch (error) {
        console.error("Error fetching initial movies:", error);
      }
    };

    fetchInitialMovies();
  }, [searchMovie]);

  useEffect(() => {
    const GetFavouritesLocalStorage = JSON.parse(localStorage.getItem('favourite-movies')) || [];
    setAddFavourite(GetFavouritesLocalStorage);
  }, []);

  const saveFavouriteLocalStorage = (items) => {
    localStorage.setItem('favourite-movies', JSON.stringify(items));
  };

  const addToFavourite = (movie) => {
    const userFavouriteList = [...addFavourite, movie];
    setAddFavourite(userFavouriteList);
    saveFavouriteLocalStorage(userFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteMovieList = addFavourite.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setAddFavourite(newFavouriteMovieList);
    saveFavouriteLocalStorage(newFavouriteMovieList);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Shavvy Movies" />
        <SearchMovie searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <div className='row '>
        <MovieList
          movies={movies}
          favouritesMovies={AddFavourites}
          handleFavouriteMovies={addToFavourite}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Favourites" />
      </div>
      <div className='row '>
        <MovieList
          movies={addFavourite}
          favouritesMovies={RemoveFavourites}
          handleFavouriteMovies={removeFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
