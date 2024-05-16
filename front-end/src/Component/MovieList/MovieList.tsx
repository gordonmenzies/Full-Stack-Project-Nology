import "./MovieList.scss";
import MovieType from "../../types/MovieType";
import Movie from "../Movie/MovieUpdate";

type MovieListProps = {
  movieArray: MovieType[];
  submitChange(formData: MovieType): void;
  handleDelete(id: number): void;
};

const MovieList = ({ movieArray, submitChange, handleDelete }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movieArray.map((movie) => (
        <Movie movie={movie} key={movie.id} submitChange={submitChange} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MovieList;
