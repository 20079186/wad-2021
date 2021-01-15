import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddPopularToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddPopularToFavorite = e => {
    e.preventDefault();
    context.addPopularToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-warning"
      onClick={handleAddPopularToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddPopularToFavoriteButton;