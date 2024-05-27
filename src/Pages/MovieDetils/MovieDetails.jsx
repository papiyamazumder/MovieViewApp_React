import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../Context/MovieContext";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((movie) => movie.title === id);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-details-container">
      <img src={movie.cover} alt={movie.title} className="movie-details-cover" />
      <div className="movie-details-info">
        <h2>{movie.title}</h2>
        <p>Release Year: {movie.year}</p>
        <p className="movie-details-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
