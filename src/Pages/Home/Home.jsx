import React from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../../List/MovieList";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  const handleCreateMovie = () => {
    navigate("/add-movie");
  };

  return (
    <div className="home-container">
      <h1>Movie List</h1>
      <div className="movie-list-card">
        <button className="create-movie-button" onClick={handleCreateMovie}>
          Create Movie
        </button>
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
