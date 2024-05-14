import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Movie from "./Component/Movie/Movie";
//import AddMovie from "./Component/AddMovie/AddMovie";
import AddMovie from "./Container/AddMovie.tsx/AddMovie";
import Lists from "./Container/Lists/Lists";
import MovieList from "./Component/MovieList/MovieList";
import MovieType from "./types/MovieType";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import RandomSelection from "./Container/RandomSelection/RandomSelection";

function App() {
  const [movieArray, setMovieArray] = useState<MovieType[]>([]);

  // ADD MOVIE NEEDS TO RECEIVE A MOVIE AS A PROP
  const emptyMovie: MovieType = {
    id: 999,
    title: ``,
    director: ``,
    genre: ``,
    year: ``,
    personalRating: ``,
    runTime: ``,
  };

  // change this to get movies
  const getMovies = async () => {
    let url = "http://localhost:8080/movie";

    const response = await fetch(url);
    const movieData = await response.json();
    console.log(movieData);
    setMovieArray(movieData);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movieArray={movieArray} />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/randomselection" element={<RandomSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
