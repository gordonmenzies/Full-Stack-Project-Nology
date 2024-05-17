import GenreType from "./GenreType";

type MovieType = {
  id: number;
  title: string;
  director: string;
  genre: string;
  year: string;
  personalRating: string;
  runTime: string;
  genreList: GenreType[];

  // id: number;
  // title: string;
  // // Year: number,
  // // Rated: string,
  // year: string;
  // // Runtime: string,
  // genre: string,
  // director: string;
  // // Writer: string,
  // // Actors: string,
  // // Plot: string,
  // // Language: string,
  // // Country: string,
  // // Awards: string,
  // // Poster: string,
  // // Metascore: number,
  // // imdbRating: number,
  // // imdbVotes: number,
  // // imdbID: string,
  // // Type: string,
  // // Response: boolean,
  // // Images: string[]
};

export default MovieType;
