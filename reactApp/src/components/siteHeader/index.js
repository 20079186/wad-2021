import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";


const SiteHeader = () => {
  return (
    <nav className="navbar fixed-top navbar-expand">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>

      <nav className="navbar navbar-item">
        <Link className=" text-white" to="/signup">
          Sign Up
        </Link>
      </nav>
      
      <nav className="navbar navbar-item">
        <Link className=" text-white" to="/login">
          Login
        </Link>
      </nav>



      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className=" navbar navbar-text text-white">
        Get All Your Entertainment In One Place
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      
 
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/popular">
              Popular 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/nowPlaying">
              Now Playing 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchList">
              Watchlist
            </Link>
          </li>
          
        </ul>
      </nav>
    </nav>
    
  );
};

export default SiteHeader;