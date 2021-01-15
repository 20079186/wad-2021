import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCredits from "../movieCredits/index.js";

const MovieCreditsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCredits cast={props.location.state.credits} /> 
      </PageTemplate>
  );
};

export default MovieCreditsPage;