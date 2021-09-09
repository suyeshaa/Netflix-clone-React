import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

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
      className={`row__poster ${isLarge && "row__posterLarge"}`}
      src={`${base_url}${isLarge ? el.poster_path : el.backdrop_path}`}
      alt={el.name}
    />
  ));

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters ">{lists}</div>
    </div>
  );
};

export default Row;
