import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieHeading from "./components/MovieHeading";
import SearchMovie from "./components/SearchMovie";
import AddFavourites from "./components/AddFavourites"; // Import AddFavourites component

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("")
  const [addFavourite, setAddFavourite] = useState([])

  const callApi = async (searchMovie) => {
    const apiUrl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=3f0caaef`
    const response = await fetch(apiUrl)
    const convertJson = await response.json()
    // console.log(convertJson)
    if (convertJson.Search) {
      setMovies(convertJson.Search)
    }
  }

  useEffect(() => {
    callApi(searchMovie)
  }, [searchMovie])


  const addToFavourite = (movie) => {
    const userFavouriteList = [...addFavourite, movie]
    setAddFavourite(userFavouriteList)
  }

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Movies" />
        <SearchMovie searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList movies={movies} favouritesMovies={AddFavourites} handleFavouriteMovies={addToFavourite} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieHeading heading="Favourites" />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieList movies={addFavourite} favouritesMovies={AddFavourites} handleFavouriteMovies={addToFavourite} />
      </div>
    </div>
  )
};
export default App;
