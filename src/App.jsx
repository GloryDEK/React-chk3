import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import MovieDetail from "./Components/MovieDetail";
import './App.css';



const App = () => {
  const [movies, setMovies] = useState([
      {
        id: 1,
        title: "Inception",
        description: "Un film sur les rêves et la réalité.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2MjU5NDI2Nl5BMl5BanBnXkFtZTcwOTQzMjc1MQ@@._V1_.jpg ",
        rating: 5,
        trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"

      }
      ,
      {
        id: 2,
        title: "Inception",
        description: "Un film sur les rêves et la réalité.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2MjU5NDI2Nl5BMl5BanBnXkFtZTcwOTQzMjc1MQ@@._V1_.jpg ",
        rating: 4,
        trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"

      },
  ]);


  const [filter, setFilter] = useState({ title: "", rating: 0, id: null });

    const filteredMovies = movies.filter(
      (movie) =>
        (!filter.id || movie.id === filter.id) && // Condition pour filtrer par ID
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.rating
    );

  return (
    <Router>
    <div >
      <h1>Mes Films Préférés</h1>

      <Routes>
          {/* Page principale */}
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />

          {/* Page des détails du film */}
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};




export default App;


