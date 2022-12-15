let cntr = 0;

function favMovieCardGenerator(movie, container, isFav) {
  container.innerHTML += 
        `<li onclick="openMovieDetails(${cntr})">
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

            <time datetime="2022">${movie.release_date? movie.release_date.substring(0,4) : movie.first_air_date.substring(0,4)}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">HD</div>
            <i class="${isFav? 'fa-solid' : 'fa-regular'} fa-heart" id="icon${cntr}" onclick="removeFavorite(${cntr++})"></i>
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


let favtMovies = JSON.parse(loadMoviesFromStorage());

function generateFavMovies() {
  if (favtMovies){
    let container = document.getElementById("movies-list");
    for (let movie of favtMovies){
      favMovieCardGenerator(movie, container, true);
    }
  }
}

function removeFavorite(index) {
  let icon = document.getElementById(`icon${index}`);
  if (icon.classList.contains("fa-regular")){
  }
  else{
    removeMovieFromFavorite(favtMovies[index]);
  }
}

function removeMovieFromFavorite(movie) {
  for (let i in favtMovies){
    if (favtMovies[i].id === movie.id){
      favtMovies.splice(i, 1);
    }
  }
  saveInStorage(favtMovies);
  location.reload();
}

generateFavMovies();