import userModel from '../api/users/userModel.js';
import movieModel from '../api/movies/movieModel';
import popularMovieModel from '../api/popularMovies/popularMoviesModel';
import upcomingMovieModel from '../api/upcomingMovies/upcomingMoviesModel';
import nowPlayingMovieModel from '../api/nowPlayingMovies/nowPlayingMoviesModel';
import {movies} from './movies';
import {upcoming} from './upcomingMovies';
import {nowPlaying} from './nowPlayingMovies';
import {popular} from './popularMovies';
import {genres} from './genres';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany({});
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  export async function loadGenres() {
    console.log('load seed data');
    console.log(genres.length);
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} Genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }

  export async function loadUpcomingMovies() {
    console.log('load seed data');
    console.log(upcoming.length);
    try {
      await upcomingMovieModel.deleteMany();
      await upcomingMovieModel.collection.insertMany(upcoming);
      console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  export async function loadNowPlayingMovies() {
    console.log('load seed data');
    console.log(nowPlaying.length);
    try {
      await nowPlayingMovieModel.deleteMany();
      await nowPlayingMovieModel.collection.insertMany(nowPlaying);
      console.info(`${nowPlaying.length} Now Playing movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  export async function loadPopularMovies() {
    console.log('load seed data');
    console.log(popular.length);
    try {
      await popularMovieModel.deleteMany();
      await popularMovieModel.collection.insertMany(upcoming);
      console.info(`${popular.length} Popular movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
 