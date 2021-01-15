import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddUpcomingToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddUpcomingToWatchList = e => {
    e.preventDefault();
    context.addUpcomingToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-warning"
      onClick={handleAddUpcomingToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddUpcomingToWatchListButton;