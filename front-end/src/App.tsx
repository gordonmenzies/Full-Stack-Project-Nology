import "./App.scss";
import Nav from "./Component/Nav/Nav";
import AddMovie from "./Container/AddMovie.tsx/AddMovie";
import Lists from "./Container/Lists/Lists";
import MovieType from "./types/MovieType";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMovies from "./Container/AllMovies/AllMovies";
import RandomSelection from "./Container/RandomSelection/RandomSelection";
import Home from "./Container/Home/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/randomselection" element={<RandomSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

// // ADD MOVIE NEEDS TO RECEIVE A MOVIE AS A PROP
// const emptyMovie: MovieType = {
//   id: 999,
//   title: ``,
//   director: ``,
//   genre: ``,
//   year: ``,
//   personalRating: ``,
//   runTime: ``,
// };

// change this to get movies
