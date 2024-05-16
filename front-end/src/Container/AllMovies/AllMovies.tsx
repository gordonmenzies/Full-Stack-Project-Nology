import MovieList from "../../Component/MovieList/MovieList";
import MovieType from "../../types/MovieType";
import { useState, useEffect } from "react";

// takes a movie array
type AllMovies = {
  movieArray: MovieType[];
};

const AllMovies = () => {
  const [movieArray, setMovieArray] = useState<MovieType[]>([]);
  const [count, setCount] = useState<number>(0);

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
    } finally {
    }
  };

  const handleDelete = (id: number) => {
    deleteMovie(id);
  };

  const submitChange = (formData: MovieType) => {
    updateMovie(formData);
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
      setCount(count + 1);
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
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("run this");
    getMovies();
  }, [count]);

  return (
    <div className="homePage">
      <MovieList movieArray={movieArray} submitChange={submitChange} handleDelete={handleDelete} />
    </div>
  );
};

export default AllMovies;
