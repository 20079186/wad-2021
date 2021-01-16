import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddUpcomingToWatchListButton from '../components/buttons/addUpcomingToWatchList'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext)
  const upcoming = context.upcoming.filter((m) => {
      return !("watchList" in m);
  });
      return (
        <MovieListPageTemplate
          title='Upcoming Movies'
          movies={upcoming}
          action={(movie) =>{
            return <AddUpcomingToWatchListButton movie={movie} />;
          }}
        />
    );
};

export default UpcomingMoviesPage;