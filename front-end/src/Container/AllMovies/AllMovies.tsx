import MovieList from "../../Component/MovieList/MovieList";
import MovieType from "../../types/MovieType";
import { useState, useEffect } from "react";

// takes a movie array
type AllMovies = {
  movieArray: MovieType[];
};

const AllMovies = () => {
  const [movieArray, setMovieArray] = useState<MovieType[]>([]);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMovies = async (): Promise<void> => {
    try {
      let url = "http://localhost:8080/movie";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const movieData = await response.json();
      setMovieArray(movieData);
    } catch (error) {
      // setError(error.message);
    } finally {
      setLoading(false);
    }

    console.log(movieArray);
  };

  // needs to be passed down movie

  const handleDelete = (id: number) => {
    console.log(id);
    // deleteMovie(id);
  };

  // needs to be passed down to movie

  // const onSubmit = (formData: MovieType) => {
  //   updateMovie(formData);
  //   console.log("reached");
  // };

  const submitChange = (formData: MovieType) => {
    updateMovie(formData);
    console.log("reached");
  };

  const updateMovie = async (formData: MovieType) => {
    let url = `http://localhost:8080/movie/${formData.id}`;
    console.log("formData", formData);
    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      alert("Movie updated");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const deleteMovie = async (id: number) => {
    let url = `http://localhost:8080/movie/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
    });
    console.log(response.json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="homePage">
      <MovieList
        movieArray={movieArray}
        //onSubmit={onSubmit}
        submitChange={submitChange}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AllMovies;

// // ADD MOVIE NEEDS TO RECEIVE A MOVIE AS A PROP
// const emptyMovie: MovieType = {
//   id: 999,
//   title: ``,
//   director: ``,
//   genre: ``,
//   year: ``,
//   personalRating: ``,
//   runTime: ``,
// };

// // // change this to get movies
// // const getMovies = async () => {
// //   let url = "http://localhost:8080/movie";

// //   const response = await fetch(url);
// //   const movieData = await response.json();
// //   console.log(movieData);
// //   setMovieArray(movieData);
// // };

// // useEffect(() => {
// //   getMovies();
// // }, []);
