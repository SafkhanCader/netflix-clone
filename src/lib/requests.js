const API_KEY = import.meta.env.VITE_TMDB_KEY

// requests.js
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original';
export const IMG_W500 = 'https://image.tmdb.org/t/p/w500';

// API v4 Bearer Token – replace with env variable for security in production
export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODMxNjEzMDI0Mzk1ZTZkNzc0NzY5ZTQ5YTc5ODI1YyIsIm5iZiI6MTc1NTEwNTIwMi4xNjIsInN1YiI6IjY4OWNjN2IyZDljMjVkYmY2ODFhM2EyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MxOcjyvI6SIPIclQBFdpYhxCGYRt0JbrHbqAbfWGPZU'
  }
};

export const requests = {
  nowPlaying: `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
  popular: `${BASE_URL}/movie/popular?language=en-US&page=1`,
  topRated: `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
  upcoming: `${BASE_URL}/movie/upcoming?language=en-US&page=1`
};
