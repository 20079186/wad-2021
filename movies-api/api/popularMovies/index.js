import express from 'express';
import {getMovieReviews} from '../tmdb-api';
import movieModel from '../movies/movieModel';


const router = express.Router();

router.get('/popular', (req, res, next) => {
    popularMoviesModel.find().then(popular => res.status(200).send([popular])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  });
  
  router.get('/:id/reviews', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
  });
  
  
  export default router;