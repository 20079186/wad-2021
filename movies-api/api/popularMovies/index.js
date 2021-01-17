import express from 'express';
import { popular } from '../../seedData/popularMovies';
import popularMoviesModel from '../movies/movieModel';


const router = express.Router();

router.get('/popular', (req, res, next) => {
    popularMoviesModel.find().then(popular => res.status(200).send([popular])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    popularMoviesModel.findByMovieDBId(id).then(popular => res.status(200).send(popular)).catch(next);
  });
  

  
  
  export default router;