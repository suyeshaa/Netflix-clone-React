import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const getData = () => {
      axios
        .get(fetchUrl)
        .then((res) => {
          console.table(res.data.results);
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [fetchUrl]);

  const lists = movies.map((el) => (
    <img
      key={el.id}
      onClick={() => clickHandler(el)}
      className={`row__poster ${isLarge && "row__posterLarge"}`}
      src={`${base_url}${isLarge ? el.poster_path : el.backdrop_path}`}
      alt={el.name}
    />
  ));

  const clickHandler = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters ">{lists}</div>

      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
