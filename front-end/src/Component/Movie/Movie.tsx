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
  const { Title, Released, Genre, Director } = movieObject;
  return (
    <div className="movie">
      <h3 className="movie__title">{Title}</h3>
      <p className="greeting__text">Year of Release: {Released}</p>
      <p className="greeting__text">Genre: {Genre}</p>
      <p className="greeting__text">Director: {Director}</p>
      <p>teenybopper</p>
    </div>
  );
};

export default Movie;
