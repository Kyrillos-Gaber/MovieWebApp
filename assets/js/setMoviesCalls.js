loadTopMovies();

let upcomingMoviesPageCount = 1;
const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${myApiKey}&language=en-US&page=${upcomingMoviesPageCount}`;
generateMoviesCards(upcomingMoviesUrl, "upcoming-movies");
