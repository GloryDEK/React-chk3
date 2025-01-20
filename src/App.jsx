import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([
      {
        title: "Inception",
        description: "Un film sur les rêves et la réalité.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2MjU5NDI2Nl5BMl5BanBnXkFtZTcwOTQzMjc1MQ@@._V1_.jpg ",
        rating: 5,
      }
      ,
      {
        title: "Inception",
        description: "Un film sur les rêves et la réalité.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BMTU2MjU5NDI2Nl5BMl5BanBnXkFtZTcwOTQzMjc1MQ@@._V1_.jpg ",
        rating: 5,
      },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div >
      <h1>Mes Films Préférés</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovie handleAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
