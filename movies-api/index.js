import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadPopularMovies, loadUpcomingMovies, loadNowPlayingMovies, loadGenres} from './seedData';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import upcomingRouter from './api/upcomingMovies';
import nowPlayingRouter from './api/nowPlayingMovies';
import popularRouter from './api/popularMovies';
import session from 'express-session';
import passport from './authenticate';


dotenv.config();


const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};


if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadGenres();
  loadNowPlayingMovies();
  loadPopularMovies();
  loadUpcomingMovies();
}


const app = express();

const port = process.env.PORT;


//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movies/:id', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use('/api/nowPlayingMovies',  passport.authenticate('jwt', {session: false}), nowPlayingRouter);
app.use('/api/popularMovies',  passport.authenticate('jwt', {session: false}), popularRouter);
app.use('/api/upcomingMovies', passport.authenticate('jwt', {session: false}), upcomingRouter);

app.use(errHandler);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
