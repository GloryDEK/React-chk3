import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <button onClick={() => navigate.push("/")}>Retour</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;