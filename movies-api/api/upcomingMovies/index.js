import express from 'express';
import {getUpcomingMovies} from '../tmdb-api';
import upcomingMoviesModel from '../upcomingMovies/upcomingMoviesModel';

const router = express.Router();

router.get('/upcoming', (req, res, next) => {
    upcomingMoviesModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
  });

  export default router;