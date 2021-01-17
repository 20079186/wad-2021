import express from 'express';
import { genres } from '../../seedData/genres';
import genresModel from './genresModel';

const router = express.Router();

  router.get('/genres', (req, res, next) => {
    genresModel.find().then(genres => res.status(200).send([genres])).catch(next);
  });

  export default router;

