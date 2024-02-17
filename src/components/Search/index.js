import axios from "axios";
import React, { useEffect, useState } from "react";
import { KEY_API } from "../../API";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard";

const Search = () => {
  let [search, setSearch] = useState([]);
  let { movieName } = useParams();
  function getSearch(key) {
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    ).then((res) => {
      setSearch(res.data.results);
    });
  }
  useEffect(() => {
    getSearch(KEY_API);
  }, [movieName]);
  console.log(search, "alalalla");
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {search.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
