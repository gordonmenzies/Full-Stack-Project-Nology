import Movie from "../../Component/Movie/Movie";
import AddMovie from "../../Component/AddMovie/AddMovie";
import MovieList from "../../Component/MovieList/MovieList";
import MovieType from "../../types/MovieType";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// takes a movie array
type AllMovies = {
  movieArray: MovieType[];
};

const AllMovies = ({ movieArray: movieArray }: AllMovies) => {
  return (
    <div className="homePage">
      <MovieList movieArray={movieArray} />
    </div>
  );
};

export default AllMovies;

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

// // // change this to get movies
// // const getMovies = async () => {
// //   let url = "http://localhost:8080/movie";

// //   const response = await fetch(url);
// //   const movieData = await response.json();
// //   console.log(movieData);
// //   setMovieArray(movieData);
// // };

// // useEffect(() => {
// //   getMovies();
// // }, []);
