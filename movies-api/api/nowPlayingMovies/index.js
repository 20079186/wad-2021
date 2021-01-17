import express from 'express';
import {getMovieReviews} from '../tmdb-api';
import nowPlayingMoviesModel from '../movies/movieModel';
import { nowPlaying } from '../../seedData/nowPlayingMovies';

const router = express.Router();

router.get('/nowPLaying', (req, res, next) => {
    nowPlayingMoviesModel.find().then(nowPlaying => res.status(200).send([nowPlaying])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    nowPlayingMoviesModel.findByMovieDBId(id).then(nowPlaying => res.status(200).send(nowPlaying)).catch(next);
  });
  
 
  
  export default router;