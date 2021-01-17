import express from 'express';
import { upcoming } from '../../seedData/upcomingMovies';
import {getMovieReviews} from '../tmdb-api';
import upcomingMoviesModel from '../upcomingMovies/upcomingMoviesModel';

const router = express.Router();

router.get('/upcoming', (req, res, next) => {
    upcomingMoviesModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    upcomingMoviesModel.findByMovieDBId(id).then(upcoming => res.status(200).send(upcoming)).catch(next);
  });
  

  
  export default router;