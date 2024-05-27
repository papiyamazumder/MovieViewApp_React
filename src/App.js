import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";
import AddMovieForm from "./Form/AddMovieForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import "./App.css";
import MovieDetails from "./Pages/MovieDetils/MovieDetails";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/movie/:id" element={<MovieDetails />} />
            <Route path="/add-movie" element={<AddMovieForm />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
