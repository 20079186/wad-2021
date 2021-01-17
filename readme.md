# Assignment 2 - Web API.

Name: Amie Abbotts

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - .... a statement of its purpose/objective ..... 
 + Feature 2 - .......
 + Feature 3 = ......
 + etc
 + etc

## Installation Requirements

```bat
git - git install
```
```bat
npm - npm install 
```
```bat
Babel - npm install --save-dev babel-cli babel-preset-env nodemon eslint babel-eslint
```
```bat
Nodemon - npm install --save-dev nodemon
```
```bat
env - npm install --save dotenv express
```
```bat
Node-Fetch - npm install -s node-fetch
```
```bat
MongodDb - downloaded locally from https://www.mongodb.com/try/download/community
```
```bat
Mongoose - npm install -save mongoose
```
Mongod instance running.
```bat
Express session - npm install --save express-session
```
followed by installation

```bat
Passport - npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY="Your API key"
mongoDB=movies_db
MONGO_DB=movies_db
SEED_DB=true
SECRET="YourOwn"
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies |  | N/A |
| /api/movies/{movieid} | Gets movie by ID  | N/A| N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A| N/A | N/A  
| /api/users | Gets users | N/A | N/A | N/A

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
A user will have to sign up or log in already if they are a returning user to view the movie pages. They will be asked to log in as they click on each page
as they are through the private route. Passport authenticates users with the jsonwebtoken.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
		// although not showing movies
~~~
