import "./MovieList.scss";
import MovieType from "../../types/MovieType";
import Movie from "../Movie/Movie";

type MovieListProps = {
  movieArray: MovieType[];
  //onSubmit(formData: MovieType): void;
  submitChange(id: number): void;
  handleDelete(id: number): void;
};

const MovieList = ({
  movieArray,
  //onSubmit,
  submitChange,
  handleDelete,
}: MovieListProps) => {
  return (
    <div className="movie-list">
      {movieArray.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          //onSubmit={onSubmit}
          submitChange={submitChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MovieList;
