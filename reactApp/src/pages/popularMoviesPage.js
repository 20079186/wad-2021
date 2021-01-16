import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddPopularToFavoriteButton from '../components/buttons/addPopularToFavorite'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.popular.filter((m) => {
    return !("favorite" in m);
  });
      return (
        <MovieListPageTemplate
          title='Popular Movies'
          movies={movies}
          action={(movie) =>{
            return <AddPopularToFavoriteButton movie={movie} />;
          }}
        />
    );
};

export default PopularMoviesPage;