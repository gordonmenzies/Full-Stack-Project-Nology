import MovieType from "../../types/MovieType";
import { useState } from "react";
import "./Movie.scss";

type MovieUpdateProp = {
  movie: MovieType;
  submitChange(formData: MovieType): void;
  handleDelete(id: number): void;
};

const Movie = ({ movie, submitChange, handleDelete }: MovieUpdateProp) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<MovieType>({
    id: movie.id,
    title: movie.title,
    director: movie.director,
    genre: movie.genre,
    year: movie.year,
    personalRating: movie.personalRating,
    runTime: movie.runTime,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log("wagwan");
    e.preventDefault();
    submitChange(formData);
    setShowForm(false);
  };

  return (
    <div className="movie">
      {!showForm ? (
        <div className="movie__details">
          <h3 className="movie__text">{movie.title}</h3>
          <p className="movie__text">Year of Release: {movie.year}</p>
          <p className="movie__text">Genre: {movie.genre}</p>
          <p className="movie__text">Director: {movie.director}</p>
          <div className="movie__buttonContainer">
            <button className="movie__button" onClick={() => handleDelete(movie.id)}>
              Delete
            </button>
            <button className="movie__button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="movie__details">
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
            <button className="movie__button" onClick={handleSubmit}>
              Submit Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
