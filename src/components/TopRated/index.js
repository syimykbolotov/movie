import axios from "axios";
import React, { useEffect, useState } from "react";
import { KEY_API } from "../../API";
import MovieCard from "../MovieCard";

const TopRated = () => {
  window.scroll(0, 0);
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  function get(key) {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  }
  useEffect(() => {
    get(KEY_API);
  }, [page]);
  return (
    <div id="popular">
      <div className="container">
        <h1>Top Rated</h1>
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} key={el.id} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
            back
          </button>
          <h6>{page}</h6>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
