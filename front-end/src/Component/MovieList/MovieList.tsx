import "./MovieList.scss";
import { useState, useEffect } from "react";
import MovieType from "../../types/MovieType";
import Movie from "../Movie/MovieUpdate";
import GenreType from "../../types/GenreType";

type MovieListProps = {
  genreArray: GenreType[];
  submitChange(formData: MovieType): void;
  handleDelete(id: number): void;
};

const MovieList = ({ genreArray, submitChange, handleDelete }: MovieListProps) => {
  const [movieList, setMovieList] = useState<MovieType[]>();
  const [movieArray, setMovieArray] = useState<MovieType[]>([]);

  const getMovies = async (): Promise<void> => {
    try {
      let url = "http://localhost:8080/movie";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const movieData = await response.json();
      setMovieArray(movieData);
      setMovieList(movieData);
      console.log("movie Data", movieData);
    } catch (error) {
      console.log(error);
    }
  };

  // set state array with only elements that fit the search terms
  const searchDirector = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.toLowerCase();
    console.log(value);
    const searchedGroup = movieList?.filter((movie) => {
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
    const searchedGroup = movieList?.filter((movie) => movie.genreList.some((genres) => genres.name.includes(value)));
    console.log(searchedGroup);
    setMovieList(searchedGroup);
    if (value === "") {
      setMovieList(movieArray);
    }
  };

  useEffect(() => {
    getMovies();
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
        {movieList?.map((movie) => (
          <Movie movie={movie} key={movie.id} submitChange={submitChange} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
