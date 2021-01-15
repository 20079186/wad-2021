import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddNowPlayingToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddNowPlayingToWatchList = e => {
    e.preventDefault();
    context.addNowPlayingToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-warning"
      onClick={handleAddNowPlayingToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddNowPlayingToWatchListButton;