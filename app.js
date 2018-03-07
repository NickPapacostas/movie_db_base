// constants
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

// const API_KEY = 'YOUR API KEY';

// variables
let pageToLoad = 1;
let totalPages = null;

// elements
const moviesContainer = document.querySelector('#movies-container');
const loadMoreBtn = document.querySelector('#load-more-movies');
const movieModal = document.querySelector('#movie-modal');


// events
document.addEventListener('DOMContentLoaded', fetchNowPlayingMovies);
loadMoreBtn.addEventListener('click', fetchNowPlayingMovies);

// Init

function fetchNowPlayingMovies(pageToLoad) {
  console.log('fetching movies....')
  return fetch(`${BASE_API_URL}movie/now_playing?page=${pageToLoad}&api_key=${API_KEY}`)
    .then(function(response) { return response.json(); });
}
