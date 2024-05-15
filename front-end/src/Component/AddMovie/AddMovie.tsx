import React, { useState, useEffect } from "react";
import MovieType from "../../types/MovieType";

//ADD MOVIE NEEDS TO RECEIVE A MOVIE AND PASS IT TO THE LABELS SO A MOVIE CAN BE UPDATED
type AddMovieProp = {
  movie: MovieType;
};

const AddMovie = ({ movie: movieObject }: AddMovieProp) => {
  const [formData, setFormData] = useState<MovieProp>({
    title: movieObject.title,
    director: movieObject.director,
    genre: movieObject.genre,
    year: movieObject.year,
    personalRating: movieObject.personalRating,
    runTime: movieObject.runTime,
  });

  //   const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(formData);
    addMovie(formData);
    setFormData({
      title: "",
      director: "",
      genre: "",
      year: "",
      personalRating: "",
      runTime: "",
    });
  };

  const addMovie = async (newMovie: MovieProp) => {
    let url = "http://localhost:8080/addmovie";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });

    if (response.ok) {
      alert("movie added");
      const movie = await response.json();
    } else {
      const message = await response.text();
      alert(message);
    }
  };

  return (
    <div>
      <h2>Movie Form</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
