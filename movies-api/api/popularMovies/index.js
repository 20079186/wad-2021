import express from 'express';
import popularModel from '../popularMovies/popularModel';


const router = express.Router();

router.get('/popular', (req, res, next) => {
    popularModel.find().then(popular => res.status(200).send([popular])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    popularModel.findByMovieDBId(id).then(popular => res.status(200).send(popular)).catch(next);
  });
  

  
  
  export default router;