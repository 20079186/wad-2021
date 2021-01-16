import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCastCredits } from "../api/movie-api";
//import { getCrewCredits } from "../api/tmdb-api";


export default ({ movie }) => {
  const [cast, setCastCredits] = useState([]);
 // const [crew, setCrewCredits] = useState([]);
	

  useEffect(() => {
    getCastCredits(movie.id).then(credits => {
      setCastCredits(credits.cast);
    });
  }, );

  //useEffect(() => {
  //  getCrewCredits(movie.id).then(crew => {
   //   setCrewCredits(crew);
  //  });
 // }, );


  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Character</th>
          <th>Actor Name</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => {
            return (
              <tr key={c.id}>
                <td>{c.character}</td>
                <td>{c.name}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/credits/${c.id}`,
                      
                    }}
                  >
                    Credits
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );}