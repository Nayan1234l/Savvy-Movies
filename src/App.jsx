

import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




const App = () => {
  const [movies, setMovies] = useState([]);
  const callApi = async () => {
    const apiUrl = 'http://www.omdbapi.com/?s=wars wars&apikey=3f0caaef'
    const response = await fetch(apiUrl)
    const convertJson = await response.json()
    console.log(convertJson)
    setMovies(convertJson.Search)
  }
  useEffect(() => {
    callApi()
  }, [])


  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  )
};
export default App;