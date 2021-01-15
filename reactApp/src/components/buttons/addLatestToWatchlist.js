import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddLatestToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddLatestToWatchList = e => {
    e.preventDefault();
    context.addLatestToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-warning"
      onClick={handleAddLatestToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddLatestToWatchListButton;