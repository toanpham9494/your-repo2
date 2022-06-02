const apiKey = "dafcbbeaa33a129aaea70833b1816beb";
const apiEnpoint = "https://api.themoviedb.org/3";

const requests = {
  trendingMovies: `${apiEnpoint}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  topRatedMovies: `${apiEnpoint}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  actionMovies: `${apiEnpoint}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`,
  adventureMovies: `${apiEnpoint}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`,
  animationMovies: `${apiEnpoint}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  comedyMovies: `${apiEnpoint}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
};

export default requests;

export { apiKey, apiEnpoint };
