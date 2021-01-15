import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddLatestToWatchListButton from '../components/buttons/addLatestToWatchlist'

const LatestMoviePage = () => {
  const context = useContext(MoviesContext)
  const movies = context.latest.filter((m) => {
    return !("watchList" in m);
  });
      return (
        <MovieListPageTemplate
          title='Latest Released Movies'
          movies={movies}
          action={(movie) =>{
            return <AddLatestToWatchListButton movie={movie} />;
          }}
        />
    );
};

export default LatestMoviePage;