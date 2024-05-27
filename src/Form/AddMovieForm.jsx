import React, { useState, useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";
import "./AddMovieForm.css";

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year && cover) {
      addMovie({ title, year, cover });
      setTitle("");
      setYear("");
      setCover("");
      navigate("/");
    }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input type="text" className="form-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" className="form-input" placeholder="Release Year" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="text" className="form-input" placeholder="Cover Image URL" value={cover} onChange={(e) => setCover(e.target.value)} required />
      <button type="submit" className="form-button">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
