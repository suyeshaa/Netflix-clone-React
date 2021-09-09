import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../request";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const data = () => {
      axios
        .get(requests.fetchNetflixOriginals)
        .then((request) => {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
        })
        .catch((err) => console.log(err));
    };

    data();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);
  return (
    //we made these nested classes so that we could style our component efficiently since we want diff styles for the background and there is stuff  written on it that has diff styles therefore banner div will customize bg while banner__contents will style the actual contenets of banner
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* optional chaining --> inside h1*/}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
