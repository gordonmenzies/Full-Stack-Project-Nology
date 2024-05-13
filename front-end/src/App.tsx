import "./App.scss";
import Nav from "./Component/Nav/Nav";
import Movie from "./Component/Movie/Movie";
import AddMovie from "./Component/AddMovie/AddMovie";
import MovieList from "./Component/MovieList/MovieList";
import MovieType from "./types/MovieType";
import { useState, useEffect } from "react";

function App() {
  const [movieArray, setMovieArray] = useState<MovieType[]>([{ id: 12, title: "runaway", year: "2023", genre: "DragonBallZ", director: "vanderbuilt", personalRating: "10", runTime: "100" }]);

  // pass in random object to populate the two compontents

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
    <div>
      <Nav />
      <MovieList movieArray={movieArray} />
      <Movie movie={movieArray[0]} />
      <AddMovie />
    </div>
  );
}

export default App;
