import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note : {movie.rating}/5</p>
      <Link to={`/movie/${movie.title}`}>Voir les détails</Link>

    </div>
  );
};

export default MovieCard;
