import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { KEY_API } from "../../API";
import MovieCard from "../MovieCard";
import { LanguageContext } from "../../context";

const Popular = () => {
  window.scroll(0, 0);
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const { language, dark, setdark } = useContext(LanguageContext);
  function get(key) {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  }
  useEffect(() => {
    get(KEY_API);
  }, [page, language]);
  return (
    <div
      id="popular"
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <div className="container">
        <h1>Popular</h1>
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
        <div className="pagination">
          <button
            style={{
              border: dark ? "1px solid white" : "none",
            }}
            onClick={() => {
              setPage(page > 1 ? page - 1 : page);
            }}
          >
            back
          </button>
          <h6>{page}</h6>
          <button
            style={{
              border: dark ? "1px solid white" : "none",
            }}
            onClick={() => setPage(page + 1)}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
