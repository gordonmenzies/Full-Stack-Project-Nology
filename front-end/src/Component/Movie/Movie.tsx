import MovieType from "../../types/MovieType";
import "./Movie.scss";

// SHOULD DISPLAY INFORMATION RECIEVED FROM THE API CALL
// THINK ABOUT HOW TO STRCTURE THAT
// PROBABLY A BOX WITH DIFFERENT LINES
// MAYBE ROOM FOR AN IMAGE

// YOU REALLY NEED TO THINK ABOUT DATA STRUCTURE HERE

type MovieProp = {
  movie: MovieType;
};

const Movie = ({ movie: movieObject }: MovieProp) => {
  //const { id, Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Metascore, imdbRating, imdbVotes, imdbID, Type, Response, Images } = movieObject;
  const { title, year, genre, director, personalRating, runTime } = movieObject;
  return (
    <div className="movie">
      <h3 className="movie__text">{title}</h3>
      <p className="movie__text">Year of Release: {year}</p>
      <p className="movie__text">Genre: {genre}</p>
      <p className="movie__text">Director: {director}</p>
      <p>teenybopper</p>
    </div>
  );
};

export default Movie;
