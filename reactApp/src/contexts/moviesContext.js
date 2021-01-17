import React, { useEffect, createContext, useReducer } from "react";
import { useState } from "react/cjs/react.development";
import { getMovies, getUpcomingMovies, getPopularMovies, getNow_Playing, getLatestMovie} from "../api/movie-api";





export const MoviesContext = createContext(null);

const reducer = (state, action) => {

  switch (action.type) {

  
    case "add-favoriteHome":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      
       
        upcoming: [...state.upcoming],
        popular: [...state.popular],
        now_playing: [...state.now_playing],
      
      };

      case "add-favoritePopular":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      
        movies: [...state.movies],
        upcoming: [...state.upcoming],
        now_playing: [...state.now_playing],
      
        
      };

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], popular: [...state.popular], now_playing: [...state.now_playing] };

    case "load-upcoming":
      return {upcoming: action.payload.movies, movies: [...state.movies], popular: [...state.popular], now_playing: [...state.now_playing] };

    case "load-popular":
        return {popular: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], now_playing: [...state.now_playing] };

    case "load-now_playing":
        return {now_playing: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular] };

    case "load-latest":
        return {latest: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular], now_playing: [...state.now_playing] };


      case "add-watchListUpcoming":
        return {
          upcoming: state.upcoming.map ((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
          ),
          
          now_playing: [...state.now_playing],
          movies: [...state.movies],
          popular: [...state.popular],
         
         
        };
        case "add-watchLatest":
          return {
            latest: state.latest.map ((m) =>
            m.id === action.payload.movie.id ? { ...m, watchList: true } : m
            ),
            
            now_playing: [...state.now_playing],
            movies: [...state.movies],
            popular: [...state.popular],
            upcoming: [...state.upcoming],
           
           
          };

        case "add-watchListNow_Playing":
        return {
          now_playing: state.now_playing.map ((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
          ),
          
          upcoming: [...state.upcoming],
          movies: [...state.movies],
          popular: [...state.popular],
          
         
        };

        
    
      case "add-review":
        return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id
              ? { ...m, review: action.payload.review }
              : m
          ),
          now_playing: [...state.now_playing],
          upcoming: [...state.upcoming],
          popular: [...state.popular],
          
          
        };
      
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular:[], now_playing:[], translations:[] });
  const[authenticated, setAuthenticated] = useState(false);

  const addHomeToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favoriteHome", payload: { movie: state.movies[index] } });

  };

  const addPopularToFavorites = (movieId) => {
    const indexPopular = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favoritePopular", payload: { movie: state.popular[indexPopular] } });

  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addUpcomingToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchListUpcoming", payload: { movie: state.upcoming[index] } });
  };

  const addNowPlayingToWatchList = (movieId) => {
    const index = state.now_playing.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchListNow_Playing", payload: { movie: state.now_playing[index] } });
  };

  const addLatestToWatchList = (movieId) => {
    const index = state.latest.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchLatest", payload: { movie: state.latest[index] } });
  };


 



  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNow_Playing().then((movies) => {
      dispatch({ type: "load-now_playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestMovie().then((movies) => {
      dispatch({ type: "load-latest", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        now_playing: state.now_playing,
        latest: state.latest,
        
        
        addHomeToFavorites: addHomeToFavorites,
        addPopularToFavorites: addPopularToFavorites,
        addUpcomingToWatchList: addUpcomingToWatchList,
        addNowPlayingToWatchList: addNowPlayingToWatchList,
        addLatestToWatchList: addLatestToWatchList,
        addReview: addReview,

        setAuthenticated,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
