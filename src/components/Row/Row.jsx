import axios from "axios";
import { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isPoster }) => {
  const [movies, setMovies] = useState([]);
  const [youtubeId, setYoutubeId] = useState("");

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        //   console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);


  const posterClickHandler = (movie) => {
    //console.log("Button Clicked!!");
    //console.log(movie.id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=dafcbbeaa33a129aaea70833b1816beb&language=en-US`
      )
      .then((res) => {
       // console.log(res.data.results[0].key);
        setYoutubeId((prevState) =>
          prevState === res.data.results[0].key ? "" : res.data.results[0].key
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__movies">
        
        {movies.map((movie) => {
          if (movie.backdrop_path) {
            return (
              <div key={movie.id} className="row__movie">
                <img
                  onClick={() => posterClickHandler(movie)}
                  className="row__movie-poster"
                  src={`https://image.tmdb.org/t/p/w500${
                    isPoster ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
              </div>
            );
          }
          return "";
        })}
      </div>

      {youtubeId && (
        <iframe
          width="98%"
          height="480"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

export default Row;
