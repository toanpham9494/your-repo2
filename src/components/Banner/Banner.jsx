import { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";
import { Button } from "@mui/material";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        const randonNumber = Math.floor(
          Math.random() * res.data.results.length
        );
        setMovie(res.data.results[randonNumber]);
      })
      .catch((err) => console.log(err));
  }, [fetchUrl]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <div className="bannerWrapper">
        <h1 className="banner__title">{movie.title}</h1>
        <p className="banner__overview">{movie.overview}</p>
        <div className="banner__buttons">
          <Button variant="contained" color="primary">
            Play
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
