import "./MovieList.scss";
import { useState, useEffect } from "react";
import MovieType from "../../types/MovieType";
import Movie from "../Movie/MovieUpdate";
import GenreType from "../../types/GenreType";

type MovieListProps = {
  movieArray: MovieType[];
  genreArray: GenreType[];
  submitChange(formData: MovieType): void;
  handleDelete(id: number): void;
};

const MovieList = ({ genreArray, movieArray, submitChange, handleDelete }: MovieListProps) => {
  const [movieList, setMovieList] = useState<MovieType[]>(movieArray);

  console.log(movieList);

  // set state array with only elements that fit the search terms
  const searchDirector = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    console.log(value);
    const searchedGroup = movieArray.filter((movie) => {
      if (movie.director) {
        return movie.director.toLowerCase().includes(value);
      }
    });
    setMovieList(searchedGroup);
    if (value === "") {
      setMovieList(movieArray);
    }
  };

  // set state array with only elements that fit the search terms
  const searchGenre = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    console.log(value);
    const searchedGroup = movieList.filter((movie) => movie.genreList.some((genres) => genres.name.includes(value)));
    console.log(searchedGroup);
    setMovieList(searchedGroup);
    if (value === "") {
      setMovieList(movieArray);
    }
  };

  useEffect(() => {
    console.log(movieArray);
    setMovieList(movieArray);
  }, []);

  return (
    <div>
      <div className="movieList__searchContainer">
        <input placeholder="Search By Director" type="text" className="movieList__employeeSearchInput" onChange={searchDirector} defaultValue={""} />
        <select className="movieList__roleSelect" onChange={searchGenre} defaultValue={""}>
          <option value=""></option>
          {genreArray.map((genre: GenreType) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-list">
        {movieList.map((movie) => (
          <Movie movie={movie} key={movie.id} submitChange={submitChange} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
