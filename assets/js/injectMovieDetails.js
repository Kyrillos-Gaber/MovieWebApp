let movie = JSON.parse(localStorage.getItem("movieToOpen"));

// set movie poster
document.getElementById("movie-detail-banner").setAttribute("src", `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);

document.getElementById("movie-name").innerHTML = movie.original_title? movie.original_title : movie.name;

document.getElementById("storyline").innerHTML = movie.overview.split(".")[0]+".";

let releaseDate = movie.release_date? movie.release_date.substring(0, 4) : movie.first_air_date.substring(0, 4);
document.title = `${movie.original_title? movie.original_title : movie.name} ${releaseDate}`;

document.getElementById("date").innerText = releaseDate;

document.getElementById("movie-datail").style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`;
// document.getElementById("movie-datail").style.