import { movies } from "./constants.js";


const moviesList = document.querySelector('.movies');
const searchForm = document.querySelector('.search-form');
const searchFormInput = searchForm.querySelector('.search-form__input');
const searchFormSubmit = searchForm.querySelector('search-form__submit');


function createNewMovie (movie) {
    const template = document.querySelector('#template').content;
    const newMovie = template.querySelector('.movies__item').cloneNode(true);
    const newMoviesTitle = newMovie.querySelector('.movies__title');
    const newMoviesImage = newMovie.querySelector('.movies__image');
    newMoviesTitle.textContent = movie.title;
    newMoviesImage.src = movie.image;
    return newMovie;
}

function getInitialMovies(movies) {
    movies.forEach(function (movie) {
        const newMovie = createNewMovie(movie)
        moviesList.prepend(newMovie)
    })
}

getInitialMovies(movies);

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Очищаем список фильмов
    moviesList.innerHTML = '';
    movies.forEach(function (movie) {
        if (movie.title.toLowerCase().includes(searchFormInput.value.toLowerCase())) {
          const newMovie = createNewMovie(movie)
            moviesList.prepend(newMovie);
        }
    });
});
