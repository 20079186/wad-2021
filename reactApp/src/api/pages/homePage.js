import React, { useContext } from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddHomeToFavoritesButton from '../components/buttons/addHomeToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => { 
    return !("favorite" in m);
  });
  return (
      <MovieListPageTemplate 
        title='No. Movies'
        movies={movies}
        action={(movie) => {
          return <AddHomeToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;