import userModel from '../api/users/userModel.js';
import movieModel from '../api/movies/movieModel';
import popularModel from '../api/popularMovies/popularModel';
import upcomingModel from '../api/upcomingMovies/upcomingModel';
import nowPlayingModel from '../api/nowPlayingMovies/nowPlayingModel';
import {movies} from './movies.js';
import {upcoming} from './upcomingMovies.js';
import {nowPlaying} from './nowPlayingMovies.js';
import {popular} from './popularMovies.js';
import {genres} from './genres.js';

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
      await upcomingModel.deleteMany();
      await upcomingModel.collection.insertMany(upcoming);
      console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  export async function loadNowPlayingMovies() {
    console.log('load seed data');
    console.log(nowPlaying.length);
    try {
      await nowPlayingModel.deleteMany();
      await nowPlayingModel.collection.insertMany(nowPlaying);
      console.info(`${nowPlaying.length} Now Playing movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  export async function loadPopularMovies() {
    console.log('load seed data');
    console.log(popular.length);
    try {
      await popularModel.deleteMany();
      await popularModel.collection.insertMany(upcoming);
      console.info(`${popular.length} Popular movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
 