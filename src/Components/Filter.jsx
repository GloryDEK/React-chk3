import React from "react";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par titre"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Note minimale"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
