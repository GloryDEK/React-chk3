import React from "react";
import MovieCard from "./MovieCard";


////////////////};

const MovieList = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
