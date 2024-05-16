import MovieType from "../../types/MovieType";
import "./Movie.scss";

type MovieSimpleProp = {
  movie: MovieType;
};

const MovieSimple = ({ movie }: MovieSimpleProp) => {
  return (
    <div className="movie">
      <div className="movie__details">
        <h3 className="movie__text">{movie.title}</h3>
        <p className="movie__text">Year of Release: {movie.year}</p>
        <p className="movie__text">Genre: {movie.genre}</p>
        <p className="movie__text">Director: {movie.director}</p>
        <div className="movie__buttonContainer"></div>
      </div>
    </div>
  );
};

export default MovieSimple;
