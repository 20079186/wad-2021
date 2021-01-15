import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddHomeToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddHomeToFavorite = e => {
    e.preventDefault();
    context.addHomeToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-warning"
      onClick={handleAddHomeToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddHomeToFavoriteButton;