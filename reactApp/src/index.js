

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
import AuthProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./sample/privateRoute";
import AuthHeader from "./authHeader";
import ProfilePage from "./pages/profilePage";






const App = () => {
  return (
      <BrowserRouter>
       <AuthProvider>
        <div className="jumbotron">
           
              <AuthHeader/>
            
          <SiteHeader />     
          <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
            <Switch>
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <PrivateRoute exact path="/movies/watchList" component={WatchListPage} />
        <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
        <PrivateRoute exact path="/movies/nowPlaying" component={NowPlayingPage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/credits/:id" component={MovieCreditsPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        
        
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <PrivateRoute exact path="/" component={HomePage} />
          
          <PrivateRoute path="/profile" component={ProfilePage} />
         
        <PrivateRoute path="/movies/:id" component={MoviePage} />
        <PrivateRoute path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </GenresContextProvider>    
      </MoviesContextProvider> 
    </div>
    
  </div>
  </AuthProvider>
</BrowserRouter>
);
};

ReactDOM.render(<App />, document.getElementById("root"));