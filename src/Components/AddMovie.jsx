import React, { useState } from "react";


const AddMovie = ({ handleAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="posterURL"
        placeholder="URL de l'affiche"
        value={newMovie.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Note"
        value={newMovie.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovie;
