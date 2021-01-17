import express from 'express';
import nowPlayingModel from '../nowPlayingMovies/nowPlayingModel';


const router = express.Router();

router.get('/nowPLaying', (req, res, next) => {
    nowPlayingModel.find().then(nowPlaying => res.status(200).send([nowPlaying])).catch(next);
  });

  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    nowPlayingModel.findByMovieDBId(id).then(nowPlaying => res.status(200).send(nowPlaying)).catch(next);
  });
  
 
  
  export default router;