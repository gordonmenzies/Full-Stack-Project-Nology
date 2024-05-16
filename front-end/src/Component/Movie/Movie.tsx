import MovieType from "../../types/MovieType";
import { useState } from "react";
import "./Movie.scss";

type MovieProp = {
  movie: MovieType;
  //onSubmit(formData: MovieType): void;
  submitChange(formData: MovieType): void;
  handleDelete(id: number): void;
};

const Movie = ({
  movie,
  //onSubmit,
  submitChange,
  handleDelete,
}: MovieProp) => {
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

  const handleUpdate = async () => {
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
          {/* <form onSubmit={() => onSubmit(formData)}> */}
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
          {/* </form> */}
        </div>
      )}
    </div>
  );
};

export default Movie;

// const handleDelete = () => {
//   deleteMovie(movieObject.id);
// };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log(JSON.stringify(movieObject));
//   updateMovie();
//   console.log("reached");
// };

// // currently this does not give or take data from add movie which it needs to
// const updateMovie = async () => {
//   let url = `http://localhost:8080/movie/${formData.id}`;

//   const result = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   if (result.ok) {
//     alert("Movie updated");
//     const updated = await result.json();
//     setShowForm(false);
//   } else {
//     const message = await result.text();
//     alert(message);
//   }
// };

// const deleteMovie = async (id: number) => {
//   let url = `http://localhost:8080/movie/${id}`;

//   const response = await fetch(url, {
//     method: "DELETE",
//   });
//   console.log(id);
//   console.log(response.json);
// };

// const handleUpdate = async () => {
//   setShowForm(!showForm);
// };
