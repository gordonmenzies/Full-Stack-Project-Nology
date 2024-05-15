import MovieType from "../../types/MovieType";
import AddMovie from "../AddMovie/AddMovie";
import { useState } from "react";
import "./Movie.scss";

type MovieProp = {
  movie: MovieType;
};

//AddMovie NEEDS TO RECEIVE A PROP MOVIE

const Movie = ({ movie: movieObject }: MovieProp) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<MovieType>({
    id: movieObject.id,
    title: movieObject.title,
    director: movieObject.director,
    genre: movieObject.genre,
    year: movieObject.year,
    personalRating: movieObject.personalRating,
    runTime: movieObject.runTime,
  });

  const handleDelete = () => {
    deleteMovie(movieObject.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(movieObject));
    updateMovie();
    console.log("reached");
  };

  // currently this does not give or take data from add movie which it needs to
  const updateMovie = async () => {
    let url = `http://localhost:8080/movie/${formData.id}`;

    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (result.ok) {
      alert("Movie updated");
      const updated = await result.json();
      setShowForm(false);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const deleteMovie = async (id: number) => {
    let url = `http://localhost:8080/movie/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
    });
    console.log(id);
    console.log(response.json);
  };

  const handleUpdate = async () => {
    setShowForm(!showForm);
  };

  // pass movie object down to add movie, recieve updated movie object back
  // movie object needs access to

  return (
    <div className="movie">
      {!showForm ? (
        <div className="movie__details">
          <h3 className="movie__text">{movieObject.title}</h3>
          <p className="movie__text">Year of Release: {movieObject.year}</p>
          <p className="movie__text">Genre: {movieObject.genre}</p>
          <p className="movie__text">Director: {movieObject.director}</p>
          <div className="movie__buttonContainer">
            <button className="movie__button" onClick={handleDelete}>
              Delete
            </button>
            <button className="movie__button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="movie__details">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
              <label>Director:</label>
              <input type="text" name="director" value={formData.director} onChange={handleChange} required />
            </div>
            <div>
              <label>Genre:</label>
              <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
            </div>
            <div>
              <label>Year:</label>
              <input type="text" name="year" value={formData.year} onChange={handleChange} required />
            </div>
            <div>
              <label>Personal Rating:</label>
              <input type="text" name="personalRating" value={formData.personalRating} onChange={handleChange} required />
            </div>
            <div>
              <label>Run Time:</label>
              <input type="text" name="runTime" value={formData.runTime} onChange={handleChange} required />
            </div>
            <div className="movie__buttonContainer">
              <button className="movie__button" type="submit">
                Submit Change
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Movie;
