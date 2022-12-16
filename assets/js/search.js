const myApiKey = "e79657d3967122271ab763157ef41f37";

// document.getElementById("showVolume").addEventListener("onkeyup",()=>)
function valueRange (){
  let showVolume = document.getElementById("showVolume")
  let volume= document.getElementById("volume").value;
  // console.log(volume);
 showVolume.innerHTML=volume
 loadAvrage(parseFloat( volume))
 
}
// let search=getElementById("search").value.textContent
function searchFunc() {
  var input, filter, ul;
  input = document.getElementById("search");
  filter = input.value.replace(" ","+")||"a";
  console.log("filter: " + filter);
     loadSearch(filter)
  // console.log(loadSearch(filter));
  // ul = document.getElementById("filter-list")
  // li = ul.appendChild(`<li>${filter}</li>`);
  
      // a = li[i].getElementsByTagName("a")[0];
      // txtValue = a.textContent || a.innerText;
      // if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //     li[i].style.display = "";
      // } else {
      //     li[i].style.display = "none";
      // }
  // }
}
function generateMoviesCards(apiUrl, containerId) {
  let movieRequest = new XMLHttpRequest();
  movieRequest.open("GET", apiUrl);
  movieRequest.send();

  let moviesObjs;

  movieRequest.onload = function() {

    if (movieRequest.readyState == 4 && movieRequest.status == 200) {
      moviesObjs = JSON.parse(movieRequest.responseText).results;

      let container = document.getElementById(containerId);
      
      for (let movie of moviesObjs) {
        container.innerHTML += 
        `<li>
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

            <time datetime="2022">${movie.release_date? movie.release_date.substring(0,4) : movie.first_air_date}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">HD</div>

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
    }
  }
}

function clearInnerHtml(tagId) {
  document.getElementById(tagId).innerHTML = "";
}

let upcomingMoviesPageCount = 1;
const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${myApiKey}&language=en-US&page=${upcomingMoviesPageCount}`;
generateMoviesCards(upcomingMoviesUrl, "upcoming-movies");


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
function loadSearch(e){
  clearInnerHtml("top-rated");console.log(e)
  let topRatedtvUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${e}`;
  // let topRatedtvUrl2 = `https://api.themoviedb.org/3/tv/top_rated?api_key=${myApiKey}&language=en-US&page=${topRatedTvsPageCount}`;
  generateMoviesCards(topRatedtvUrl, "top-rated");
}
function loadAvrage(e){
  clearInnerHtml("top-rated");console.log(e)
  let topRatedtvUrl = `https://api.themoviedb.org/3/discover/movie?api_key=e79657d3967122271ab763157ef41f37&vote_average.gte=${e}&vote_average.lte=8.0&sort_by=vote_average.asc`;
  generateMoviesCards(topRatedtvUrl, "top-rated");
}
loadTopMovies();
