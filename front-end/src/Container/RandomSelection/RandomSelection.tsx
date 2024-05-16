import MovieSimple from "../../Component/Movie/MovieSimple";
import MovieType from "../../types/MovieType";
import { useState, useEffect } from "react";

const RandomSelection = () => {
  const [movie, setMovie] = useState<MovieType>();

  const getRandomMovie = async (): Promise<void> => {
    try {
      let url = "http://localhost:8080/movie/random";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const movieData = await response.json();
      setMovie(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("run this");
    getRandomMovie();
  }, []);

  return <div className="randomMovie">{!movie ? <p> cannnot access movie database </p> : <MovieSimple movie={movie} />}</div>;
};

export default RandomSelection;
