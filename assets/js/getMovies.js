const myApiKey = "e79657d3967122271ab763157ef41f37";

let moviesCounter = 0;
let allMovies = [];



function generateMoviesCards(apiUrl, containerId) {
  let movieRequest = new XMLHttpRequest();
  movieRequest.open("GET", apiUrl);
  movieRequest.send();

  let moviesObjs;

  let favoriteMovies = JSON.parse(loadMoviesFromStorage());

  movieRequest.onload = function() {

    if (movieRequest.readyState == 4 && movieRequest.status == 200) {
      moviesObjs = JSON.parse(movieRequest.responseText).results;
      // push new movies to use globaly
      allMovies.push(...moviesObjs) ;
      let container = document.getElementById(containerId);
      
      for (let movie of moviesObjs) {
        let flag = false;
        if (favoriteMovies) {
          for (let favMovie of favoriteMovies){
            flag = movie.id === favMovie.id;
            if (flag) break;
          }
        }
        movieCardGenerator(movie, container, flag);
      }
    }
  }
}

function movieCardGenerator(movie, container, isFav) {
  container.innerHTML += 
        `<li onclick="openMovieDetails(${moviesCounter})">
        <div class="movie-card">

          <a href="./movie-details.html">
            <figure class="card-banner">
              <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.original_title? movie.original_title : movie.name}">
            </figure>
          </a>

          <div class="title-wrapper">
            <a href="./movie-details.html">
              <h3 class="card-title">${movie.original_title? movie.original_title : movie.name}</h3>
            </a>

            <time datetime="2022">${movie.release_date? movie.release_date.substring(0,4) : movie.first_air_date? movie.first_air_date.substring(0,4):""}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">HD</div>
            <i class="${isFav? 'fa-solid' : 'fa-regular'} fa-heart" id="icon${moviesCounter}" onclick="ToggleFavorite(${moviesCounter++})"></i>
            <div class="duration">
              <ion-icon name="time-outline"></ion-icon>

              <time datetime="PT137M">137 min</time>
            </div>

            <div class="rating">
              <ion-icon name="star"></ion-icon>

              <data>${movie.vote_average}</data>
            </div>
          </div>

        </div>
      </li>`;
}

function clearInnerHtml(tagId) {
  document.getElementById(tagId).innerHTML = "";
}




let topRatedMoviesPageCount = 1;
function loadTopMovies() {
  clearInnerHtml("top-rated");
  let topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${myApiKey}&language=en-US&page=${topRatedMoviesPageCount}`;
  generateMoviesCards(topRatedMoviesUrl, "top-rated");
}

let topRatedTvsPageCount = 1;
function loadTopTV(){
  clearInnerHtml("top-rated");
  let topRatedtvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${myApiKey}&language=en-US&page=${topRatedTvsPageCount}`;
  generateMoviesCards(topRatedtvUrl, "top-rated");
}

// Movie Card click Event to open movie details
function openMovieDetails(movieIndex) {
  let movieJson = JSON.stringify(allMovies[movieIndex]);
  localStorage.removeItem("movieToOpen");
  localStorage.setItem("movieToOpen", movieJson);
}



function ToggleFavorite(index) {
  let icon = document.getElementById(`icon${index}`);
  if (icon.classList.contains("fa-regular")){
    icon.classList.replace("fa-regular", "fa-solid");
    addToFavorite(allMovies[index]);
  }
  else{
    icon.classList.replace("fa-solid", "fa-regular");
  let movies = loadMoviesFromStorage();
    removeFromFavorite(allMovies[index]);
  }
}

function loadMoviesFromStorage() {
  return localStorage.getItem("favorite");
}

function saveInStorage(objs){
  localStorage.setItem("favorite", JSON.stringify(objs));
}

function addToFavorite(movie) {
  let movies = new Array();
  let jsnStr = loadMoviesFromStorage();
  if (jsnStr) {
    movies.push(...JSON.parse(jsnStr));
  }
  movies.push(movie);
  saveInStorage(movies);
}

function removeFromFavorite (movie) {
  let movies = JSON.parse(loadMoviesFromStorage());
  for (let i in movies){
    if (movies[i].id === movie.id){
      movies.splice(i, 1);
    }
  }
  saveInStorage(movies);
}

