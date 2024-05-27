import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import "./MovieList.css";
import useMovieTitleFormatter from "../CustomHooks/useMovieTitleFormatter";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const navigate = useNavigate();

  const { formatTitle, setFormat } = useMovieTitleFormatter();

  const filteredMovies = movies.filter((movie) => formatTitle(movie.title.toLowerCase()).includes(searchTitle.toLowerCase()) && (searchYear === "" || movie.year.toString() === searchYear));

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleYearChange = (e) => {
    setSearchYear(e.target.value);
  };

  const onCardClickHandler = (title) => {
    navigate(`/movie/${encodeURIComponent(title)}`);
  };

  const handleFormatChange = (formatType) => {
    setFormat(formatType);
  };

  return (
    <div className="movie-grid">
      <div className="search-bar">
        <input type="text" placeholder="Search by title" value={searchTitle} onChange={handleTitleChange} />
        <input type="text" placeholder="Release Year" value={searchYear} onChange={handleYearChange} />

        <div className="title-format-dropdown">
          <label htmlFor="formatSelect">Select Title Format:</label>
          <select id="formatSelect" onChange={(e) => handleFormatChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="titlecase">Title Case</option>
          </select>
        </div>
      </div>
      <div className="movies-container">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index} onClick={() => onCardClickHandler(movie.title)}>
            <img src={movie.cover} alt={movie.title} />
            <h2>{formatTitle(movie.title)}</h2>
            <p>Release Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
