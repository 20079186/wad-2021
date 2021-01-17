import express from 'express';
import {getMovieReviews,} from '../tmdb-api';
import nowPlayingMoviesModel from '../movies/movieModel';
import { nowPlaying } from '../../seedData/nowPlayingMovies';

const router = express.Router();

router.get('/nowPLayingMovies', (req, res, next) => {
    nowPlayingMoviesModel.find().then(nowPlayingMovies => res.status(200).send([nowPlayingMovies])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    nowPlayingMoviesModel.findByMovieDBId(id).then(nowPlayingMovies => res.status(200).send(nowPlayingMovies)).catch(next);
  });
  
 
  
  export default router;