import "./MovieList.scss";
import MovieType from "../../types/MovieType";
import Movie from "../Movie/Movie";

type MovieListProps = {
  movieArray: MovieType[];
};

const MovieList = ({ movieArray }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
