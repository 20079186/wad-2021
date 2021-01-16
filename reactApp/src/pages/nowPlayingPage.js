import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddNowPlayingToWatchListButton from '../components/buttons/addNowPlayingToWatchList'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.now_playing.filter((m) => {
      return !("watchList" in m);
  });
      return (
        <MovieListPageTemplate
          title='Now Playing'
          movies={movies}
          action={(now_playing) =>{
            return <AddNowPlayingToWatchListButton movie={now_playing} />;
          }}
        />
    );
};

export default NowPlayingPage;