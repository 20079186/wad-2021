import './sample/';

import React from "react";
import ReactDOM from "react-dom";
import "./components/siteHeader/style.css"
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchListPage from './pages/watchListPage';
import PopularMoviesPage from './pages/popularMoviesPage'
import NowPlayingPage from './pages/nowPlayingPage';
import MovieCreditsPage from './pages/movieCreditsPage';
import LatestMoviePage from "./pages/latestMovie";




const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
            <AuthProvider>
          <SiteHeader />     
          <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
            <Switch>
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/watchList" component={WatchListPage} />
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        <Route exact path="/movies/nowPlaying" component={NowPlayingPage} />
        <Route exact path="movies/latest" component={LatestMoviePage}/>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/credits/:id" component={MovieCreditsPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </GenresContextProvider>    
      </MoviesContextProvider> 
    </div>
    </AuthProvider>
  </div>
</BrowserRouter>
);
};

ReactDOM.render(<App />, document.getElementById("root"));